import React, { useState } from 'react'
import './FilterItem.scss'
import Dots from '../../Dots/Dots'
import { useDispatch } from 'react-redux'



function FilterItem({ text, functions }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked)
    clicked
      ? functions[1] ? dispatch(functions[1]()) : dispatch(functions[0]())
      : dispatch(functions[0]())
  }

  return (
    <div className="filter-item" onClick={() => clickHandler()}>
      <Dots />
      <div className="filter-item__text">
        {text}
      </div>
    </div>
  )
}

export default FilterItem
