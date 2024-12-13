import React from 'react'
import { useLocation } from 'react-router-dom'

const Banner = ({ text }) => {
  const location = useLocation()
  return (
    <div>
      {location.pathname === '/' && (
        <div className="banner-home">
          <h1 className="banner-home__title">{text}</h1>
        </div>
      )}
      {location.pathname === '/about' && <div className="banner-about"></div>}
    </div>
  )
}

export default Banner
