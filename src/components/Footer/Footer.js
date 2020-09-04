import React from 'react'
import './Footer.scss'
import facebook from '../../assets/img/facebook.svg'
import twitter from '../../assets/img/twitter.svg'
import youtube from '../../assets/img/youtube.svg'
import reddit from '../../assets/img/reddit.svg'
import FooterItem from './FooterItem/FooterItem'

function Footer() {
  const icons = [facebook, twitter, youtube, reddit]
  return (
    <div className="footer">
      {icons.map((icon, index) => (
        <FooterItem key={index} img={icon} />
      ))}

    </div>
  )
}

export default Footer
