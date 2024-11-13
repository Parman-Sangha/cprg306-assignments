import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 className="text-4xl p-14 pb-0 font-bold ">
        CPRG 306: Web Development 2 - Assignments- Parman Sangha
      </h1>
      <ul className="p-14 pt-5">
        <li>
          <Link href="/week-2" className=" hover:text-blue-400">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className=" hover:text-blue-400">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-4" className=" hover:text-blue-400">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className=" hover:text-blue-400">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-6" className=" hover:text-blue-400">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-7" className=" hover:text-blue-400">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-8" className=" hover:text-blue-400">
            Week 8 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-9" className=" hover:text-blue-400">
            Week 9 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
