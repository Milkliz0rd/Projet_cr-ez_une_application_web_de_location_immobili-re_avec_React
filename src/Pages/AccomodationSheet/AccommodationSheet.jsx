import React from 'react'
import Carouselle from '../../Components/Carousselle/Carouselle'
import { useLocation, useParams } from 'react-router-dom'
import AccomodationsInfos from '../../Components/AccomodationInfos/AccomodationsInfos'

const AccomodationSheet = () => {
  const { accomodationId } = useParams() //Le Hook useParam va ajouter l'id de notre élément cliqué dans l'url de la page. celui ci a été définit dans le composant 'Cards' (to={`/Accommodation/${accommodation.id}`})
  const { state } = useLocation() //Avec le hook useLocation, on accès à l'objet de location actuel (l'url de la page). Cela permet de récupérer les donnés transmisent via state lors de la navigation.
  const accomodation = state?.accommodation //Ici accomodation contiendra l'objet passé dans le state de la page précédente. Si aucune donnès n'a été transmisent alors 'accomodation' sera undefined (grâce à '?')

  return (
    <div>
      {/* affiche le carousselle avec les images et le titre du logement sur lequel la page se trouve */}
      <Carouselle pictures={accomodation.pictures} title={accomodation.title} />
      {/* affiche le composant AccomodationInfos */}
      <AccomodationsInfos accomodation={accomodation} />
    </div>
  )
}

export default AccomodationSheet
