import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul className="nav-page">
        <NavLink to={'/'} className={'nav-page__link'}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink to={'/about'} className={'nav-page__link'}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
