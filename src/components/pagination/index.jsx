const Pagination = ({ pages }) => {
    const currentPage = 10;
    const pageButtons = [];
  
    // Generar botones solo en pantallas md+
    if (currentPage > 3) {
      pageButtons.push(
        <button
          key={1}
          className="hidden md:inline px-3 py-1 rounded-md bg-[var(--white)] text-[var(--solid)] hover:bg-gray-200"
        >
          1
        </button>
      );
  
      if (currentPage > 4) {
        pageButtons.push(
          <span key="start-ellipsis" className="hidden md:inline px-2 py-1 text-[var(--grey)]">...</span>
        );
      }
    }
  
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(pages, currentPage + 1); i++) {
      pageButtons.push(
        <button
          key={i}
          className={`${
            i === currentPage
              ? "bg-[var(--green)] text-[var(--white)]"
              : "bg-[var(--white)] text-[var(--solid)] hover:bg-gray-200"
          } px-3 py-1 rounded-md ${i !== currentPage ? "hidden md:inline" : ""}`}
        >
          {i}
        </button>
      );
    }
  
    if (currentPage < pages - 2) {
      if (currentPage < pages - 3) {
        pageButtons.push(
          <span key="end-ellipsis" className="hidden md:inline px-2 py-1 text-[var(--grey)]">...</span>
        );
      }
  
      pageButtons.push(
        <button
          key={pages}
          className="hidden md:inline px-3 py-1 rounded-md bg-[var(--white)] text-[var(--solid)] hover:bg-gray-200"
        >
          {pages}
        </button>
      );
    }
  
    return (
      <nav className="flex flex-wrap justify-center items-center gap-2 mt-6">
        <button
          className="px-3 py-1 rounded-md bg-[var(--card)] text-[var(--white)] hover:bg-gray-600 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Anterior
        </button>
  
        {pageButtons}
  
        <button
          className="px-3 py-1 rounded-md bg-[var(--card)] text-[var(--white)] hover:bg-gray-600 disabled:opacity-50"
          disabled={currentPage === pages}
        >
          Siguiente
        </button>
      </nav>
    );
  };
  
  export default Pagination;
  