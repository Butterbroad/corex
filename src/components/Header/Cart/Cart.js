import React from 'react'
import './Cart.scss'

function Cart({ img, count }) {
  return (
    <div className="cart">
      <img src={img} alt="" />
      <span>{count.length}</span>
    </div>
  )
}

export default Cart
