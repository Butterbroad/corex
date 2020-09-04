import React, { useState } from 'react'
import './Banner.scss'
import banner from '../../assets/img/banner.svg'
import banner1 from '../../assets/img/banner1.svg'
import banner2 from '../../assets/img/banner2.svg'
import bannerBullet from './BannerBullet/BannerBullet'
import BannerBullet from './BannerBullet/BannerBullet'

function Banner() {
  const [isActive, setIsActive] = useState(0);
  const banners = [banner, banner1, banner2];


  return (
    <div className="banner">
      <div className="banner__title">
        NEWS
      </div>
      <div className="banner__wrapper">
        <div className="banner__img">
          <img src={banners[isActive]} alt="" />
        </div>
        <div className="banner__bullets">
          <BannerBullet
            active={isActive === 0}
            click={() => setIsActive(0)}
          />
          <BannerBullet
            active={isActive === 1}
            click={() => setIsActive(1)}
          />
          <BannerBullet
            active={isActive === 2}
            click={() => setIsActive(2)}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
