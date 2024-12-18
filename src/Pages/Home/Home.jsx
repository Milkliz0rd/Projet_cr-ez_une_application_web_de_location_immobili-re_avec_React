import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Cards from '../../Components/Cards/Cards'

const Home = () => {
  const bannerHomeContent = 'Chez vous, partout et ailleurs'
  return (
    <div>
      {/*Affiche le composant Banner à qui ont transfert la props 'bannerHomeContent' */}
      <Banner text={bannerHomeContent} />
      {/*Affiche le composant Cards */}
      <Cards />
    </div>
  )
}

export default Home
