import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white h-16 text-black border-b-2 ">
      <div className="flex items-center justify-between mx-12 h-full">
        {/* logo */}

        <span className="font-bold text-xl">APIS</span>

        <div>
          <ul className="flex gap-x-6 ">
            <li>
              <Link href="/">Prediction</Link>
            </li>
            <li>
              <Link href="/ricky-morty">Ricky Morty</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
