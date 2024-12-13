import React from 'react'
import Collapses from '../../Components/Collapses/Collapses'
import Banner from '../../Components/Banner/Banner'

const About = () => {
  const aboutCollapses = [
    {
      id: 1,
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      id: 2,
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
    },
    {
      id: 4,
      title: 'Service',
      content:
        'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance ',
    },
    {
      id: 5,
      title: 'Securité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien rescpectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]
  return (
    <div>
      <Banner />
      <div className="collapse-about">
        <Collapses collapses={aboutCollapses} />
      </div>
    </div>
  )
}

export default About
