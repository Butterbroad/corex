import React, { useState } from 'react'
import './Lang.scss'
import earth from '../../../assets/img/earth.svg'

function Lang() {
  const [lang, setLang] = useState();
  return (
    <div className="lang">
      <div className="lang__img">
        <img src={earth} alt="" />
      </div>
      <div className="lang__text">ENG</div>
      <div className="lang__dropdown">
        <div className="lang__dropdown-item">ESP</div>
        <div className="lang__dropdown-item">RUS</div>
        <div className="lang__dropdown-item">CHN</div>
        <div className="lang__dropdown-item">KOR</div>
      </div>
    </div>
  )
}

export default Lang
