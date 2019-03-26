import React from 'react'

export default function paginationTool({
  incrPage,
  setResultsPerPage,
  setPage,
  paginationNumbers,
}) {
  return (
    <React.Fragment>
      <span testID="prev-button" onClick={() => incrPage(-1)}>Prev</span>
      <Pagination
        testID="pagination-buttons"
        paginationNumbers={paginationNumbers}
        setPage={setPage}
      />
      <span testID="next-button" onClick={() => incrPage(1)}>Next</span>
      <select onChange={setResultsPerPage}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="all">all</option>
      </select>
    </React.Fragment>
  )
}

function Pagination({ paginationNumbers, setPage }) {
  return paginationNumbers.map(pageNumber =>
    <span 
      key={`${pageNumber}pageNumberQuestionService`} 
      onClick={() => setPage(pageNumber)}
    >
      {pageNumber + 1}
    </span>
  )
}
