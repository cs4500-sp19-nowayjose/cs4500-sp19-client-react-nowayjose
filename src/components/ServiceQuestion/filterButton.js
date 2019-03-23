import React from 'react'

const FilterButton = ({ onClickFilterData }) => {
  return (
    <button
      onClick={onClickFilterData}
      className="btn-lg btn"
      style={{ position: 'fixed', right: 10, color: '#FEC107'}}
    >
      <i className="fas fa-search fa-2x"></i>
    </button>
  )
}

export default FilterButton;
