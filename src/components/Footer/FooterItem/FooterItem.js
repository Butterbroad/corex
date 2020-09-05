import React from 'react'
import './FooterItem.scss'
import Dots from '../../Dots/Dots'

function FooterItem({ img }) {
  return (
    <div className="footerItem">
      <Dots />
      <div className="footerItem__img">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default FooterItem
