// components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 border rounded-md bg-white text-gray-700"
        >
          Previous
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
        >
          {page}
        </button>
      ))}

      {currentPage < pageCount && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 border rounded-md bg-white text-gray-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
