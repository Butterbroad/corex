import React from 'react'
import { useDispatch } from 'react-redux'
import './OnSaleItem.scss'
import star from '../../../assets/img/star.svg'
import arrow from '../../../assets/img/arrow.svg'
import { addToCart } from '../../../Store/actions/cart'

function OnSaleItem({ info }) {
  const dispatch = useDispatch()

  return (
    <div className="onSaleItem" onClick={() => dispatch(addToCart(info.id))}>
      <div className="onSaleItem__star">
        <img src={star} alt="" />
      </div>
      <div className="onSaleItem__arrow">
        <img src={arrow} alt="" />
      </div>
      <div className="onSaleItem__release">
        {info.release}
      </div>
      <div className="onSaleItem__manufacturer">
        {info.manufacturer}
      </div>
      <div className="onSaleItem__model">
        {info.model}
      </div>
      <div className="onSaleItem__hash">
        {info.hash}
      </div>
      <div className="onSaleItem__algorithm">
        {info.algorithm}
      </div>
      <div className="onSaleItem__efficiency">
        {info.efficiency}
      </div>
      <div className="onSaleItem__profit">
        <span>{info.profit}</span>
        {info.duration}
      </div>
      <div className="onSaleItem__price">
        {info.price}
      </div>
    </div>
  )
}

export default OnSaleItem
