import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Ce composant sera notre mise en page générale de notre application.
const Layout = () => {
  return (
    <div className="page-structure">
      <header className="page-content">
        {/* Ici, on appel le composant 'Header' */}
        <Header />
      </header>
      {/* Ici, Le composant Outlet de React-rooter-dom gère l'affichage dynamique des pages en fonction de la route actuelle */}
      <main className="page-content">
        <Outlet />
      </main>
      <footer>
        {/* Ici, on appel le composant 'Footer' */}
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
