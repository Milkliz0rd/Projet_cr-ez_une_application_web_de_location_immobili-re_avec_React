import React from 'react'
import StarsRating from '../StarsRating/StarsRating'
import Collapses from '../Collapses/Collapses'

const AccomodationsInfos = ({ accomodation }) => {
  const tags = accomodation.tags
  const collapseData = [
    { id: 1, title: 'Descriptions', content: accomodation.description },
    {
      id: 2,
      title: 'Equipements',
      content: (
        <ul className="accomodations-info-body__collapses--equipment">
          {accomodation.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ] // ici on transfert les données que l'on veut avoir dans nos composants collapses
  return (
    <div>
      <div className="accomodations-info">
        {/*Partie où l'on retrouve le nom de la location, le lieu où elle se trouve et ses tags */}
        <div className="accomodations-infos-header">
          <div className="accomodations-infos-header__title">
            <h1 className="accomodations-infos-header__title--h1">
              {accomodation.title}
            </h1>
            <p className="accomodations-infos-header__title--p">
              {accomodation.location}
            </p>
          </div>
          <ul className="accomodations-infos-header__tags">
            {tags.map((tag, index) => (
              <li
                className="accomodations-infos-header__tags--container"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* Partie Hote, où l'on retrouve le nom et la photo de l'hébergeur */}
        <div className="accomodations-info-body">
          <div className="accomodations-info-body__host">
            <div className="accomodations-info-body__host--name">
              {accomodation.host.name}
            </div>
            <div>
              <img
                src={accomodation.host.picture}
                alt={accomodation.host.name}
                className="accomodations-info-body__host--img"
              />
            </div>
          </div>
          {/*  affiche le composant StarsRating à qui on tranfert la props 'accomodation.rating' */}
          <div>
            <StarsRating
              rating={accomodation.rating}
              className="accomodations-info-body__rating"
            />
          </div>
        </div>
      </div>
      {/* affiche le composant collapse à qui on transfert la props 'collapseData' */}
      <div className="collapse-accomodation accomodations-info-body__collapse">
        <Collapses collapses={collapseData} />
      </div>
    </div>
  )
}

export default AccomodationsInfos
