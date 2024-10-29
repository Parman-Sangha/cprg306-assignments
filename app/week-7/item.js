export default function Item({ name, quantity, category }) {
  return (
    <li className="shadow-xl bg-gray-700 rounded-md w-1/2 p-5">
      <p className="font-bold text-xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
