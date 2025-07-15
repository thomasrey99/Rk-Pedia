"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/characters", item: "Characters" },
    { path: "/episodes", item: "Episodes" },
    { path: "/locations", item: "Locations" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="relative w-full max-w-screen mx-auto bg-[var(--white)] min-h-[30vh] sm:min-h-[50vh] flex flex-col items-center justify-center rounded-b-xl px-4">
      {/* Nav */}
      <nav className="absolute top-4 sm:top-8 right-4 z-50">
        {/* Botón hamburguesa (solo mobile) */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6 text-[var(--background)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row gap-2 sm:gap-4 absolute sm:static top-12 right-0 bg-[var(--space)] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none shadow-lg sm:shadow-none w-40 sm:w-auto`}
        >
          {links.map(({ path, item }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[var(--white)] sm:text-[var(--space)] hover:text-[var(--yellow-orange)] font-bold text-sm sm:text-base text-center"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Logo */}
      <Image
        src="/portal.png"
        width={200}
        height={200}
        alt="portal"
        className="mt-4 sm:mt-0"
      />

      {/* Título */}
      <h1 className="text-2xl sm:text-5xl font-bold text-[var(--space)] mt-10 sm:mt-6 text-center max-w-xs sm:max-w-none">
        The Rick and Morty Pedia
      </h1>
    </header>
  );
};

export default Header;
