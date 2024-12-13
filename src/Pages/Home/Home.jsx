import React from 'react'
import Banner from '../../Components/BannerCards/Banner'
import Cards from '../../Components/Cards/Cards'

const Home = () => {
  const bannerHomeContent = 'Chez vous, partout et ailleurs'
  return (
    <div>
      <Banner text={bannerHomeContent} />
      <Cards />
    </div>
  )
}

export default Home
