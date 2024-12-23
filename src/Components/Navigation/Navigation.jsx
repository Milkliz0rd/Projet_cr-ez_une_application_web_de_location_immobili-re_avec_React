import React from 'react'
import { NavLink } from 'react-router-dom'

// Ce composant est notre menu de Navigation, il nous permet de naviguer entre les pages grâce au composant NavLink.
const Navigation = () => {
  return (
    <div>
      <ul className="nav-page">
        {/* NavLink vers la page Acceuil */}
        <li>
          <NavLink to={'/'} className={'nav-page__link'}>
            Accueil
          </NavLink>
        </li>
        {/* NavLink vers la page About */}
        <li>
          <NavLink to={'/about'} className={'nav-page__link'}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
