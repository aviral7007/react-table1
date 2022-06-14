import React from "react";

export const Pagination=({pageSize,totalCount,pageDisplay})=>{
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount /pageSize); i++) {
    pageNumbers.push(i);
  }
    

    return(
        <nav>
      <ul >
    
        {pageNumbers.map(pageNumber => (
          <li  key={pageNumber} className='page-item'>
            <a onClick={() => pageDisplay(pageNumber)} href='!#' className='page-link'>
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>


    );

}
