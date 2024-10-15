"use client";
// Had to update week-4 code due to it not working with my form.
import { useState } from "react";

export default function AddNewItem() {
  const CATEGORIES = [
    "Dairy",
    "Bakery",
    "Produce",
    "Frozen Foods",
    "Meat",
    "Dry Goods",
    "Canned Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState("Produce");

  const increaseQuantity = () => {
    if (itemQuantity < 20) {
      setItemQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    console.log(newItem);
    alert(`Item Added: ${itemQuantity} ${itemName} in ${itemCategory}`);

    setItemName("");
    setItemQuantity(1);
    setItemCategory("Produce");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="p-6 mt-8 mx-auto bg-white w-full max-w-lg rounded-xl shadow-xl"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Add a New Item
      </h2>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-black mb-2">
          Item Name
        </label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-black mb-2">
          Quantity
        </label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={itemQuantity === 1}
            className="bg-red-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300 transition duration-200"
          >
            -
          </button>
          <span className="text-xl font-medium text-black">{itemQuantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            disabled={itemQuantity === 20}
            className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-300 transition duration-200"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-black mb-2">
          Category
        </label>
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add Item
      </button>
    </form>
  );
}
