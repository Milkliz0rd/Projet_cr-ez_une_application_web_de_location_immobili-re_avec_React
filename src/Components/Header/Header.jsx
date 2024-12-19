import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../../Assets/img/logo-header.png'

//Composant Header, appelé dans Layout pour la mise en page.
const Header = () => {
  return (
    <header>
      {/* On appel le composant Navigation */}
      <Navigation />
      <img className="header__img" src={Logo} alt="logo Kasa" />
    </header>
  )
}

export default Header
