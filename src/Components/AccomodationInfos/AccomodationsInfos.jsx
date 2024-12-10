import React from 'react'

const AccomodationsInfos = ({ accomodation }) => {
  const tags = accomodation.tags
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
          {tags.map((tag) => (
            <li className="accomodations-info-body__tags--container">{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccomodationsInfos
