import React from 'react'
import { useLocation } from 'react-router-dom'

// Composant Banner, qui est appélé et définit selon les pages sur lequel il se trouve.
const Banner = ({ text }) => {
  // Le hook useLocation permet d'accéder à l'URL actuelle pour adapter le style et le contenu du composant.
  const location = useLocation()
  return (
    <div>
      {/* Ici, lorsque nous seront sur la page 'home' (définit comme url '/') il aura le style 'banner-home' et il aura un titre transmit via la props 'text' */}
      {location.pathname === '/' && (
        <div className="banner-home">
          <h1 className="banner-home__title">{text}</h1>
        </div>
      )}
      {/* Ici, lorque nous seront sur la page 'about' (définit comme url '/about') il aura le style 'banner-about'. */}
      {location.pathname === '/about' && <div className="banner-about"></div>}
    </div>
  )
}

export default Banner
