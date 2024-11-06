import React from "react";

export default function Header() {
  return (
    <header className="w-100 py-4 bg-transparent">
      <nav className="container mx-auto">
        <ul className="list-none flex justify-center items-center gap-5 font-lora uppercase">
          <li className="px-3 py-1">
            <a href="#dettagli">Dettagli</a>
          </li>
          <li className="px-3 py-1">
            <a href="#galleria">Galleria</a>
          </li>
          <li className="px-3 py-1">
            <a href="#">voce 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
