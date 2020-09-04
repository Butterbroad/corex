import React from 'react'
import './FilterItem.scss'

function FilterItem({ text }) {
  return (
    <div className="filter-item">
      <div className="filter-item__text">
        {text}
      </div>
    </div>
  )
}

export default FilterItem
