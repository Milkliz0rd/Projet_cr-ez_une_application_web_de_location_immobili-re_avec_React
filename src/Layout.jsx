import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <header className="page-content">
        <Header />
      </header>
      <main className="page-content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
