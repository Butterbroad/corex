import React from 'react'
import './Header.scss'
import logo from "../../assets/img/logo.svg"
import logo2 from "../../assets/img/logo2.svg"
import cart from '../../assets/img/cart.svg'
import burger from '../../assets/img/burger.svg'
import Lang from './Lang/Lang'
import { useSelector } from 'react-redux'

function Header() {
  const count = useSelector(store => store.cart.products)

  return (
    <div className="header">
      <div className="header__burger">
        <img src={burger} alt="" />
      </div>
      <a href="/" className="header__logo">
        <img src={logo} alt="" />
        <img src={logo2} alt="" />
      </a>
      <Lang />
      <div className="header__cart">
        <img src={cart} alt="" />
        <span>{count.length}</span>
      </div>
    </div>
  )
}

export default Header
