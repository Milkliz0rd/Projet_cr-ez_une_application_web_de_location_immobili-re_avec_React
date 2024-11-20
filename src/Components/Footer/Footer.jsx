import React from 'react'
import LogoFooter from '../../Assets/img/logo-footer.png'

const Footer = () => {
  return (
    <footer className="container">
      <img src={LogoFooter} alt="logo casa" className="img-footer" />
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
