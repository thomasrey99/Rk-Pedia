"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Favorites", path: "/favorites" },
    { name: "Characters", path: "/characters" },
    { name: "Episodes", path: "/episodes" },
    { name: "Locations", path: "/locations" },
  ];

  const socialLinks = [
    {
      name: "Portfolio",
      url: "https://portfolio-thomas-sigma.vercel.app/",
    },
    {
      name: "Thomas.rey.work@gmail.com",
      url: "mailto:thomas.rey.work@gmail.com",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/thomas-rey-39099021b/",
    },
  ];

  return (
    <footer className="bg-[var(--white)] w-full mx-auto text-[var(--yellow-background)] py-8 sm:py-12 rounded-t-xl">
      <div className="px-2 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-between">
          {/* Navigation */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[var(--space)]">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className="hover:text-[var(--orange)] transition-colors duration-200 focus:outline-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[var(--space)]">
              {socialLinks.map(({ name, url }, i) => (
                <li key={i}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--orange)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--green)] rounded"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              About
            </h3>
            <p className="text-sm sm:text-base text-[var(--space)]">
              Explore the universe of characters with this app. Discover and
              connect with your favorites!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-[var(--grey)] text-center text-xs sm:text-sm text-[var(--solid)]">
          &copy; {currentYear} Thomas Rey, all rights reserved. Powered by{" "}
          <Link
            className="font-bold text-[var(--orange)]"
            href="https://rickandmortyapi.com/"
            target="_blank"
          >
            Rick and Morty API
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
