import React from 'react'
import './FilterItem.scss'
import Dots from '../../Dots/Dots'

function FilterItem({ text }) {
  return (
    <div className="filter-item">
      <Dots />
      <div className="filter-item__text">
        {text}
      </div>
    </div>
  )
}

export default FilterItem
