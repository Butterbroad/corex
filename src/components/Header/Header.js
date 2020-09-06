import React from 'react'
import './Header.scss'
import logo from "../../assets/img/logo.svg"
import logo2 from "../../assets/img/logo2.svg"
import cart from '../../assets/img/cart.svg'
import burger from '../../assets/img/burger.svg'
import Lang from './Lang/Lang'
import { useSelector } from 'react-redux'
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'

function Header() {
  const logoImg = [logo, logo2]
  const count = useSelector(store => store.cart.products)

  return (
    <div className="header">
      <div className="header__burger">
        <img src={burger} alt="" />
      </div>

      <Logo img={logoImg} />

      <Lang />

      <Cart img={cart} count={count} />
    </div>
  )
}

export default Header
