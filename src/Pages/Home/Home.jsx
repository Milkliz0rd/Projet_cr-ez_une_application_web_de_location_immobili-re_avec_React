import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Cards from '../../Components/Cards/Cards'

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Banner />
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
