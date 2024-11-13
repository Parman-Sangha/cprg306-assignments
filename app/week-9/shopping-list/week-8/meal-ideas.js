"use client";

import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];

  const sanitizedIngredient = ingredient.replace(/[^a-zA-Z0-9 ]/g, "").trim();

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        sanitizedIngredient
      )}`
    );

    if (!response.ok) {
      console.error("Failed to fetch data from API:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

// Fetch detailed information for a selected meal
const fetchMealDetails = async (mealId) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );

    if (!response.ok) {
      console.error("Failed to fetch meal details:", response.statusText);
      return null;
    }

    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then(setMeals);
      setSelectedMeal(null); // Reset selected meal when ingredient changes
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="mt-10 px-4 md:px-8">
            
      {meals.length === 0 ? (
        <p className="text-center text-gray-300">
                    No meal ideas found for "{ingredient}". Please try selecting
          a different item.         
        </p>
      ) : (
        <>
                    
          <h2 className="font-bold text-2xl text-center text-white mb-6">
                        Meal Ideas using "{ingredient}"           
          </h2>
                    
          <ul className="space-y-3">
                        
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="bg-gray-800 p-4 rounded-lg text-white text-center cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
                onClick={() => handleMealClick(meal.idMeal)}
              >
                                {meal.strMeal}
                              
              </li>
            ))}
                      
          </ul>
                  
        </>
      )}
            
      {selectedMeal && (
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
                    
          <h3 className="font-bold text-3xl mb-2 text-center">
                        {selectedMeal.strMeal}
                      
          </h3>
                    
          <p className="text-center text-gray-400 italic mb-4">
                        Category: {selectedMeal.strCategory} | Cuisine:{" "}
            {selectedMeal.strArea}
                      
          </p>
                    
          <p className="text-justify mb-4 leading-relaxed">
            {selectedMeal.strInstructions}
          </p>
                    
          <h4 className="font-semibold mt-6 mb-2 text-xl">Ingredients:</h4>
                    
          <ul className="list-disc list-inside ml-4 text-gray-300">
                        
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = selectedMeal[`strIngredient${index + 1}`];
              const measure = selectedMeal[`strMeasure${index + 1}`];
              return (
                ingredient && (
                  <li key={index} className="mb-1">
                                        {ingredient} - {measure}
                                      
                  </li>
                )
              );
            })}
                      
          </ul>
                  
        </div>
      )}
          
    </div>
  );
}
