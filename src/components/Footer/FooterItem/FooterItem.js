import React from 'react'
import './FooterItem.scss'

function FooterItem({ img }) {
  return (
    <a href="/" className="footerItem">
      <div className="footerItem__img">
        <img src={img} alt="" />
      </div>
    </a>
  )
}

export default FooterItem
