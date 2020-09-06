import React from 'react'
import './Filter.scss'
import FilterItem from './FilterItem/FilterItem'
import {
  getProductsByIncreaseManufacturer,
  getProductsByDecreaseManufacturer,
  getProductsByMaxPrice,
  getProductsByMinPrice
} from '../../Store/actions/products'

function Filter() {
  const item = [
    { text: "By Manufacturer", funtions: [getProductsByIncreaseManufacturer, getProductsByDecreaseManufacturer] },
    { text: "Minimum price", funtions: [getProductsByMinPrice] },
    { text: "Maximum price", funtions: [getProductsByMaxPrice] }
  ]
  return (
    <div className="filter">
      <div className="filter__title">
        SORT BY
      </div>
      <div className="filter__wrapper">
        {item.map((item, index) => (
          <FilterItem key={index} text={item.text} functions={item.funtions} />
        ))}
      </div>
    </div>
  )
}

export default Filter
