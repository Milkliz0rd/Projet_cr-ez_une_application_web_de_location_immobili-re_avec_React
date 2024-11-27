import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'
import Collapses from '../../Components/Collapses/Collapses'

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <BannerAbout />
        <Collapses />
      </div>
      <Footer />
    </div>
  )
}

export default About
