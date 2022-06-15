
import React from "react";

export const Pagination = ({ pageSize, totalCount, pageDisplay ,setCurrentPage,currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
    pageNumbers.push(i);
  }
   const Prev=()=>{
    setCurrentPage(currentPage > 1 ? currentPage -1 : 1);
  }
  const Next=()=>{
    setCurrentPage(currentPage + 1);
  }

  return (
    <nav>
      <ul>
        <button onClick={Prev}>previous</button>
        {pageNumbers.map((pageNumber) => (
          <li
            style={{
              display: "inline-block",
              margin: "10px",
              border: "1px solid #000",
            }}
            key={pageNumber}
            className="page-item"
          >
            <a
              onClick={() => pageDisplay(pageNumber)}
              href="!#"
              className="page-link"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <button onClick={Next}>next</button>
      </ul>
    </nav>
  );
};
