import React from "react";

const Pagination = ({ next, previous, onPaginationPressed, }) => {
  return (
    <div>
      { previous ? <button type="button" onClick={() => onPaginationPressed(previous)}>previous</button> : null }
      <button type="button" onClick={() => onPaginationPressed(next)}>next</button>
    </div>
  )
}

export default Pagination
