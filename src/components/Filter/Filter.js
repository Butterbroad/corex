import React, { useState } from 'react'
import './Filter.scss'
import FilterItem from './FilterItem/FilterItem'

function Filter() {
  const [item, setItem] = useState([
    { text: "By Manufacturer" },
    { text: "Minimum price" },
    { text: "Maximum price" }
  ])
  return (
    <div className="filter">
      <div className="filter__title">
        SORT BY
      </div>
      <div className="filter__wrapper">
        {item.map((item, index) => (
          <FilterItem key={index} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Filter
