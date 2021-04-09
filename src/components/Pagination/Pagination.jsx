import React from "react";
import './Pagination.scss'

const Pagination = ({ next, previous, onPaginationPressed, }) => {
  return (
    <div>
      { previous
        ? <button type="button" className="pagination-btn" onClick={() => onPaginationPressed(previous)}>previous</button>
        : null }
      <button type="button" className="pagination-btn" onClick={() => onPaginationPressed(next)}>next</button>
    </div>
  )
}

export default Pagination
