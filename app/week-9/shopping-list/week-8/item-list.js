"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div>
            
      <div className="mb-10 pt-10 ps-9 text-center">
                
        <button
          className={`p-4 ${sortBy === "name" ? "bg-blue-600" : "bg-gray-800"}`}
          onClick={() => setSortBy("name")}
        >
                    Sort by Name         
        </button>
                
        <button
          className={`p-4 ${
            sortBy === "category" ? "bg-blue-600" : "bg-gray-800"
          }`}
          onClick={() => setSortBy("category")}
        >
                    Sort by Category         
        </button>
              
      </div>
            
      <ul className="flex flex-col gap-4">
                
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
              
      </ul>
          
    </div>
  );
}
