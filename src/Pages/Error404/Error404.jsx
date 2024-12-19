import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <div className="error-content">
        <h1 className="error-content__title">404</h1>
        <h2 className="error-content__descript">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        {/* NavlInk qui permet de retourner à la page d'acceuil */}
        <NavLink to={'/'} className={'error-content__nav'}>
          Retourner sur la page d'acceuil
        </NavLink>
      </div>
    </div>
  )
}

export default Error404
