import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Carouselle from '../../Components/Carousselle/Carouselle'
import { useLocation, useParams } from 'react-router-dom'

const AccommodationSheet = () => {
  const { accommodationId } = useParams()
  const { state } = useLocation()
  const accommodation = state?.accommodation

  return (
    <div>
      <Header />
      <div>
        <Carouselle pictures={accommodation.pictures} id={accommodation.id} />
      </div>
      <Footer />
    </div>
  )
}

export default AccommodationSheet
