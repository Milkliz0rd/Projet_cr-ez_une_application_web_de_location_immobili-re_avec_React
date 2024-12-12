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
  ]
  return (
    <div>
      <div className="accomodations-infos-header">
        <div className="accomodations-infos-header__title">
          <h1 className="accomodations-infos-header__title--h1">
            {accomodation.title}
          </h1>
          <p className="accomodations-infos-header__title--p">
            {accomodation.location}
          </p>
        </div>
        <div className="accomodations-infos-header__host">
          {accomodation.host.name}
          <img
            src={accomodation.host.picture}
            alt={accomodation.host.name}
            className="accomodations-infos-header__host--img"
          />
        </div>
      </div>
      <div className="accomodations-info-body">
        <ul className="accomodations-info-body__tags">
          {tags.map((tag, index) => (
            <li
              className="accomodations-info-body__tags--container"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <StarsRating
          rating={accomodation.rating}
          className="accomodations-info-body__rating"
        />
      </div>
      <div className="collapse-accomodation accomodations-info-body__collapse">
        <Collapses collapses={collapseData} />
      </div>
    </div>
  )
}

export default AccomodationsInfos
