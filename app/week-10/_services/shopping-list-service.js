import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

/**
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export async function getItems(userId) {
  try {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, "items")
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

/**
 * @param {string} userId
 * @param {Object} itemToAdd
 * @returns {Promise<string>}
 */
export async function addItem(userId, itemToAdd) {
  try {
    const docRef = await addDoc(
      collection(db, "users", userId, "items"),
      itemToAdd
    );
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}
