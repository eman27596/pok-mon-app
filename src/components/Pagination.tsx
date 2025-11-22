import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-2.5 rounded-xl bg-white border-2 border-primary-300 text-primary-700 font-bold hover:bg-primary-50 hover:border-primary-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
      >
        Previous
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...' || page === currentPage}
            className={`px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm ${
              page === currentPage
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-110'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default shadow-none'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 hover:shadow-md'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-2.5 rounded-xl bg-white border-2 border-primary-300 text-primary-700 font-bold hover:bg-primary-50 hover:border-primary-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

