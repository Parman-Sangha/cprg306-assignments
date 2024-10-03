"use client";
import { useState } from "react";
export default function Counter() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <div className="text-center font-bold text-3xl">
      <p className="pb-3">Number = {quantity}</p>

      <button
        className="px-3 text-5xl text-blue-600 hover:text-blue-400"
        onClick={increment}
        disabled={quantity == 20}
      >
        +
      </button>

      <button
        className="px-3 text-6xl text-red-600 hover:text-red-400"
        onClick={decrement}
        disabled={quantity == 0}
      >
        -
      </button>
    </div>
  );
}
