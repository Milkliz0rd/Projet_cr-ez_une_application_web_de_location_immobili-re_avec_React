import React from 'react'
import Carouselle from '../../Components/Carousselle/Carouselle'
import { useLocation, useParams } from 'react-router-dom'
import AccomodationsInfos from '../../Components/AccomodationInfos/AccomodationsInfos'
import Error404 from '../Error404/Error404'

const AccomodationSheet = () => {
  const { accomodationId } = useParams() // Récupère l'ID depuis l'URL
  const { state } = useLocation() // Récupère les données passées via state
  const accomodation = state?.accommodation // Si state est défini, récupère l'objet accommodation

  return (
    <div>
      {/* si on arrive à récupérer l'objet on affiche la page */}
      {accomodation ? (
        <>
          {/* Affiche le carousselle avec les images et le titre du logement */}
          <Carouselle
            pictures={accomodation.pictures}
            title={accomodation.title}
          />
          {/* Affiche les informations du logement */}
          <AccomodationsInfos accomodation={accomodation} />
        </>
      ) : (
        // sinon redirection page 404
        <Error404 />
      )}
    </div>
  )
}

export default AccomodationSheet
