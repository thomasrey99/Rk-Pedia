"use client";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Characters", path: "/characters" },
    ];

    const handleNavClick = (path) => {
        router.push(path);
    };

    return (
        <footer
            className="w-full text-[var(--white)] py-6 sm:py-10"
            aria-label="Pie de página"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
                    {/* Sección de Navegación */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm sm:text-[var(--grey)]">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleNavClick(link.path)}
                                        className="hover:text-[var(--green)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded"
                                        aria-label={`Ir a ${link.name}`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            Contact
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm sm:text-[var(--grey)]">
                            <li>
                                <a
                                    href="mailto:thomas.rey.work@gmail.com"
                                    className="hover:text-[var(--green)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded"
                                    aria-label="send a email to thomas.rey.work@gmail.com"
                                >
                                    thomas.rey.work@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/example"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--green)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded"
                                    aria-label="Visitar nuestro Twitter"
                                >
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección de Información */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                            About
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Explore the universe of characters with this app. Discover and connect with your favorites!
                        </p>
                    </div>
                </div>

                {/* Derechos Reservados */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-600 text-center text-xs sm:text-sm text-gray-400">
                    &copy; {currentYear} Thomas Rey, all rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;