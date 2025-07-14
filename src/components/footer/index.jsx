"use client";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Characters", path: "/characters" },
        { name: "Episodes", path: "/episodes" },
        { name: "Locations", path: "/locations" }
    ];

    const socialLinks = [
        {
            name: "Portfolio",
            url: "https://portfolio-thomas-sigma.vercel.app/"
        },
        {
            name: "Thomas.rey.work@gmail.com",
            url: "mailto:thomas.rey.work@gmail.com"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/thomas-rey-39099021b/"
        }
    ]

    return (
        <footer
            className="bg-[var(--white)] w-full max-w-[90%] mx-auto text-[var(--yellow-background)] py-6 sm:py-10 rounded-t-xl"
            aria-label="Pie de página"
        >
            <div className="px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
                    {/* Sección de Navegación */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm sm:text-[var(--space)]">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    className="hover:text-[var(--orange)] text-solid transition-colors duration-200 focus:outline-none"
                                    href={link.path}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            Contact
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm sm:text-[var(--space)]">

                            {
                                socialLinks.map(({ name, url }, i) => (
                                    <li key={i}>
                                        <Link
                                            target="blank"
                                            href={url}
                                            className="hover:text-[var(--orange)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Sección de Información */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            About
                        </h3>
                        <p className="text-sm sm:text-base text-[var(--space)]">
                            Explore the universe of characters with this app. Discover and connect with your favorites!
                        </p>
                    </div>
                </div>

                {/* Derechos Reservados */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-600 text-center text-xs sm:text-sm text-[var(--solid)]">
                    &copy; {currentYear} Thomas Rey, all rights reserved. Powered by <Link className="font-bold text-[var(--orange)]" href={"https://rickandmortyapi.com/"} target="blanck">Rick and Morty api</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;