import React from 'react'
import './OnSaleItemMob.scss'
import star from '../../../assets/img/starBig.svg'
import { addToCart } from '../../../Store/actions/cart'
import { useDispatch } from 'react-redux'
import Dots from '../../Dots/Dots'
import img from '../../../assets/img/itemMob1.png'


function OnSaleItemMob({ info }) {
  const dispatch = useDispatch()
  return (
    <div className="onSaleItemMob" onClick={() => dispatch(addToCart(info.id))}>
      <Dots />
      <div className="onSaleItemMob__header">
        <div className="onSaleItemMob__info">
          <div className="onSaleItemMob__name">
            {info.name}
          </div>
          <div className="onSaleItemMob__hash">
            {info.hash}
          </div>
        </div>
        <div className="onSaleItemMob__star">
          <img src={star} alt="" />
        </div>
      </div>

      <div className="onSaleItemMob__img">
        <img src={info.img} alt="" />
      </div>

      <div className="onSaleItemMob__price">
        {info.price}
      </div>
    </div>
  )
}

export default OnSaleItemMob
