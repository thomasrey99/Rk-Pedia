"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const Searchbar = ({ path, placeholder, Filters }) => {
  const params=useSearchParams()
  const router = useRouter();
  const [name, setName] = useState(params.get("name") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = name.trim() ? `?name=${encodeURIComponent(name)}` : "";
    router.push(`${path}${query}`);
  };

  const hasFilters = !!Filters;

  return (
    <div
      className={`w-full max-w-[90%] mx-auto flex flex-col gap-4 sm:flex-row pt-20 pb-10 ${
        hasFilters
          ? "sm:items-center sm:justify-between"
          : "sm:items-center sm:justify-center"
      }`}
    >
      {/* Filtros */}
      {hasFilters && (
        <div className="w-full sm:w-1/2 md:w-1/3">
          <Filters />
        </div>
      )}

      {/* Formulario de búsqueda */}
      <form
        onSubmit={handleSubmit}
        className={`w-full ${
          hasFilters ? "sm:w-2/3" : "sm:w-3/4"
        } flex items-center gap-2 relative`}
        aria-label={placeholder}
      >
        {/* Input */}
        <div className="relative w-full flex items-center">
          <input
            type="text"
            placeholder={placeholder || "Search..."}
            className="w-full rounded-lg pl-10 pr-4 py-3 bg-[var(--space)]/50 backdrop-blur-sm border border-[var(--solid)] text-[var(--white)] placeholder-[var(--grey)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label={placeholder}
          />
          <svg
            className="absolute hidden sm:block left-3 -translate-y-1/2 h-4 w-4 text-[var(--grey)]"
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

        {/* Botón */}
        <button
          type="submit"
          className="flex items-center justify-center px-5 py-3 rounded-lg bg-[var(--green)] text-[var(--white)] font-semibold text-sm sm:text-base whitespace-nowrap"
          aria-label="Search"
        >
          <span className="hidden sm:inline">Search</span>
          <svg
            className="h-5 w-5 sm:hidden"
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
