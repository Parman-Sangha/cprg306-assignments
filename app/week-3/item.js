export default function Item({ name, quantity, category }) {
  return (
    <li className=" p-5 bg-gray-950 max-w-80 ">
      <p className="text-2xl font-bold">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
