import React from 'react'
import './BannerBullet.scss'
import square from '../../../assets/img/square.svg'

function BannerBullet({ active, click }) {
  return (
    <div
      className={`bannerBullet ${active && 'active'}`}
      onClick={click}
    >
      <img src={square} alt="" />
    </div>
  )
}

export default BannerBullet
