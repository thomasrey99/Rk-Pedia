"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {
            path: "/characters",
            item: "Characters"
        },
        {
            path: "/episodes",
            item: "Episodes"
        },
        {
            path: "/locations",
            item: "Locations"
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[var(--white)] relative w-full sm:max-w-[90%] mx-auto min-h-[30vh] sm:min-h-[50vh] flex flex-col items-center justify-center rounded-b-xl">
            <nav className="absolute top-4 sm:top-8 right-8">
                {/* Hamburger Button (Mobile Only) */}
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
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? "flex" : "hidden"
                        } sm:flex flex-col sm:flex-row gap-2 sm:gap-4 absolute sm:static top-12 right-0 bg-[var(--space)] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none shadow-lg sm:shadow-none`}
                >
                    {links.map(({ path, item }, i) => (
                        <Link
                            className="text-[var(--space)] hover:text-[var(--yellow-orange)] font-bold text-sm sm:text-base"
                            href={path}
                            key={i}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
            <Image
                src="/portal.png"
                width={250}
                height={250}
                alt="portal"
            />
            <h1 className="text-3xl sm:text-5xl font-bold text-[var(--space)] mt-12 sm:mt-6 text-center">
                The Rick and Morty Pedia
            </h1>
        </header>
    );
};

export default Header;