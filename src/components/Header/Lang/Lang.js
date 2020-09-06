import React, { useState, useEffect } from 'react'
import './Lang.scss'
import earth from '../../../assets/img/earth.svg'

function Lang() {
  const languages = [
    { short: "en", long: "ENG" },
    { short: "sp", long: "ESP" },
    { short: "ru", long: "RUS" },
    { short: "cn", long: "CHN" },
    { short: "ko", long: "KOR" }
  ]

  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [nextLang, setNextLang] = useState([]);


  useEffect(() => {
    setNextLang(languages.filter(elem => elem.short !== currentLang.short))
  }, [currentLang])

  return (
    <div className="lang">
      <div className="lang__img">
        <img src={earth} alt="" />
      </div>
      <div className="lang__text">{currentLang.long}</div>

      <div className="lang__dropdown">
        {nextLang.map((elem, index) => (
          <div key={index} className="lang__dropdown-item" onClick={() => setCurrentLang(elem)}>{elem.long}</div>
        ))}
      </div>
    </div>
  )
}

export default Lang
