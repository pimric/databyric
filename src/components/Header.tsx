"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-lake bg-lake text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a
          href="#top"
          className="text-3xl font-terminal font-semibold tracking-tight inline-flex items-center space-x-1 leading-none"
        >
          <span className="text-d drop-shadow-dbr">D</span>
          <span className="text-white">ata</span>
          <span className="text-b drop-shadow-dbr">B</span>
          <span className="text-white">y</span>
          <span className="text-r drop-shadow-dbr">R</span>
          <span className="text-white">ic</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4 font-medium text-base">
          <a
            href="#developpement"
            className="bg-white text-[#3A86FF] px-3 py-1 rounded shadow font-bold hover:bg-gray-100 transition"
          >
            <span className="text-d">D</span>éveloppement
          </a>
          <a
            href="#bilan"
            className="bg-white text-[#FFD166] px-3 py-1 rounded shadow font-bold hover:bg-gray-100 transition"
          >
            <span className="text-b">B</span>ilan
          </a>
          <a
            href="#referencement"
            className="bg-white text-[#FF8C42] px-3 py-1 rounded shadow font-bold hover:bg-gray-100 transition"
          >
            <span className="text-r">R</span>éférencement
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-[#FFD1A1] border-t border-orange-100">
          <ul className="flex flex-col p-4 space-y-2 font-medium">
            <li>
              <a className="bg-white text-[#3A86FF] px-3 py-2 rounded shadow font-bold" href="#developpement">
                <span className="text-d">D</span>éveloppement
              </a>
            </li>
            <li>
              <a className="bg-white text-[#FFD166] px-3 py-2 rounded shadow font-bold" href="#bilan">
                <span className="text-b">B</span>ilan
              </a>
            </li>
            <li>
              <a className="bg-white text-[#FF8C42] px-3 py-2 rounded shadow font-bold" href="#referencement">
                <span className="text-r">R</span>éférencement
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
