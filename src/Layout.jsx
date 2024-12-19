import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Ce composant sera notre mise en page générale de notre application.
// On appel la props children. Celle-ci sera définit dans le composant 'Index', sur les différentes routes que l'on a programmé dans notre application.
const Layout = ({ children }) => {
  return (
    <div className="page-structure">
      <header className="page-content">
        {/* Ici, on appel le composant 'Header' */}
        <Header />
      </header>
      {/* Ici, ce sera l'emplacement de la page actuelle */}
      <main className="page-content">{children}</main>
      <footer>
        {/* Ici, on appel le composant 'Footer' */}
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
