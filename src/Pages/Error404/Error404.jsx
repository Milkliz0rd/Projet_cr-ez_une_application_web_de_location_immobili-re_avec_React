import React from 'react'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-descript">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink to={'/'} className={'error-nav-link'}>
          Retourner sur la page d'acceuil
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Error404
