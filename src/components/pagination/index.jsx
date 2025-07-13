"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ pages, path }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const goToPage = (page) => {
    if (page >= 1 && page <= pages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`${path}?${params.toString()}`);
    }
  };

  const getPageNumbers = () => {

    const maxVisiblePages = typeof window !== "undefined" && window.innerWidth < 640 ? 3 : 5;
    const pagesToShow = [];
    const sidePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - sidePages);
    let endPage = Math.min(pages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, pages - maxVisiblePages + 1);
      endPage = pages;
    }

    if (startPage > 1) {
      pagesToShow.push(1);
      if (startPage > 2) pagesToShow.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    if (endPage < pages) {
      if (endPage < pages - 1) pagesToShow.push("...");
      pagesToShow.push(pages);
    }

    return pagesToShow;
  };

  return (
    <nav
      className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 py-10"
      aria-label="Paginación"
    >
      {/* Back page button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="px-2 py-1 sm:px-3 sm:py-1 rounded-md bg-[var(--green)] text-[var(--white)] hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm sm:text-base"
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        Back
      </button>

      {/* Page buttons */}
      {getPageNumbers().map((page, index) => (
        <button
          key={`page-${page}-${index}`}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={`px-2 py-1 sm:px-3 sm:py-1 rounded-md text-sm sm:text-base ${
            page === currentPage
              ? "bg-green-600 text-[var(--white)] font-medium cursor-default disabled:opacity-75"
              : page === "..."
              ? "bg-transparent text-gray-400 cursor-default"
              : "bg-[var(--card)] text-[var(--white)] hover:bg-gray-600"
          } transition-colors duration-200`}
          disabled={page === currentPage || page === "..."}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={page === "..." ? "more pages" : `page ${page}`}
        >
          {page}
        </button>
      ))}

      {/* next page button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        className="px-2 py-1 sm:px-3 sm:py-1 rounded-md bg-[var(--green)] text-[var(--white)] hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm sm:text-base"
        disabled={currentPage === pages}
        aria-label="next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;