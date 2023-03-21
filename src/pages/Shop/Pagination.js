import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="text-nowrap">
      {/* display page   */}
      {pages?.map((page, index) => (
        <button
          className={page === currentPage ? "btn btn-success m-2" : "btn btn-primary m-2"}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
