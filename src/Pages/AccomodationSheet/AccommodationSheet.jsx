import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Carouselle from '../../Components/Carousselle/Carouselle'
import { useLocation, useParams } from 'react-router-dom'
import AccomodationsInfos from '../../Components/AccomodationInfos/AccomodationsInfos'

const AccomodationSheet = () => {
  const { accomodationId } = useParams()
  const { state } = useLocation()
  const accomodation = state?.accommodation

  return (
    <div>
      <div className="page-content">
        <Header />
        <Carouselle
          pictures={accomodation.pictures}
          title={accomodation.title}
        />
        <AccomodationsInfos accomodation={accomodation} />
      </div>
      <Footer />
    </div>
  )
}

export default AccomodationSheet
