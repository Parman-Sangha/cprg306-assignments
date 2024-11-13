"use client";

import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const CATEGORY_OPTIONS = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => quantity < 20 && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mt-8 mx-auto bg-gray-700 w-full max-w-lg rounded-xl shadow-xl pb-4"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Add a New Item
      </h2>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">
          Item Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">
          Quantity
        </label>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="bg-red-500 text-black px-4 py-2 rounded-lg disabled:bg-gray-300"
          >
            -
          </button>
          <span className="text-xl font-medium text-white">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="bg-blue-600 text-black px-4 py-2 rounded-lg disabled:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
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
