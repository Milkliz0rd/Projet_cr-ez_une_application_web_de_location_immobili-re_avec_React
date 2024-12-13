import React from 'react'
import LogoFooter from '../../Assets/img/logo-footer.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={LogoFooter} alt="logo casa" className="footer-container__img" />
      <div className="footer-container__p">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
