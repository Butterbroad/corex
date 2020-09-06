import React from 'react'
import './Logo.scss'

function Logo({ img }) {
  return (
    <a href="/" className="logo">
      <img src={img[0]} alt="" />
      <img src={img[1]} alt="" />
    </a>
  )
}

export default Logo
