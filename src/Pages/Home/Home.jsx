import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/BannerCards/Banner'
import Cards from '../../Components/Cards/Cards'

const Home = () => {
  return (
    <div>
      <div className="page-content">
        <Header />
        <Banner />
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

export default Home
