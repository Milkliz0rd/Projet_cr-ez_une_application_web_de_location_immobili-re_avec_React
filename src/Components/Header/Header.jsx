import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../../Assets/img/logo-header.png'

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <img className="header__img" src={Logo} alt="logo Kasa" />
    </header>
  )
}

export default Header
