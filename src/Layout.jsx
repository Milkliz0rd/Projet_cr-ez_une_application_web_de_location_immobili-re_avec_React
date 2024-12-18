import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="page-structure">
      <header className="page-content">
        <Header />
      </header>
      <main className="page-content">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
