"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbar = ({ path, placeholder, Filters }) => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = name.trim() ? `?name=${encodeURIComponent(name)}` : "";
    router.push(`${path}${query}`);
  };

  const hasFilters = !!Filters;

  return (
    <div
      className="w-full max-w-[90%] sm:max-w-5xl mx-auto py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4 justify-between"
    >
      {/* Filtros opcionales */}
      {hasFilters && (
        <div className="w-full sm:w-auto order-2 sm:order-1">
          <Filters />
        </div>
      )}

      {/* Formulario de búsqueda */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 sm:gap-4 relative order-1 sm:order-2"
        aria-label={placeholder}
      >
        <div className="flex-1 flex items-center justify-center relative">
          <input
            type="text"
            placeholder={placeholder || "Search..."}
            className="w-full rounded-lg pl-8 sm:pl-12 pr-3 sm:pr-24 py-4 sm:py-3 bg-[var(--space)]/50 backdrop-blur-sm border border-[var(--solid)] text-[var(--white)] placeholder-[var(--grey)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:border-transparent transition-all duration-200 text-xs sm:text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label={placeholder}
          />
          <svg
            className="hidden sm:block absolute left-2 sm:left-3 -translate-y-1/2 h-3 sm:h-5 w-3 sm:w-5 text-[var(--grey)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button
          type="submit"
          className="flex items-center gap-1 sm:gap-2 px-6 py-4 sm:py-3 rounded-lg bg-[var(--green)] text-[var(--white)] font-semibold text-xs sm:text-base transition-all duration-200"
          aria-label={placeholder}
        >
          <span className="hidden sm:inline">Search</span>
          <svg
            className="h-5 sm:h-5 w-5 sm:w-5 sm:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;