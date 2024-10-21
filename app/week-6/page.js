import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-5 bg-black">
      <h1 className="font-bold text-5xl underline pb-7">
        Parman's Shopping List 🛒
      </h1>
      <ItemList />
    </main>
  );
}
