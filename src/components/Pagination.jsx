import React from 'react'
import "./Pagination.scss"
import { useState } from 'react';

const Pagination = ({onChangePage}) => {
const [actualPage, setActualPage] = useState(1);

const changePage = (newPage) => { 
     setActualPage(newPage); 
     onChangePage(newPage * 12); 
}
    
  return (
    <div className="c-pagination">
    {actualPage > 0 &&
        <button onClick={()=> {changePage(actualPage - 1)}}>Previous Page</button>}
        <p>{actualPage}</p>
        
        <button  onClick={()=> {changePage(actualPage + 1)}}>Next Page</button>
    </div>
  )
}

export default Pagination