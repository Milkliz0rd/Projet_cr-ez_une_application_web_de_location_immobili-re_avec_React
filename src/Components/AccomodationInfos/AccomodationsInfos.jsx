import React from 'react'

const AccomodationsInfos = ({ accomodation }) => {
  return (
    <div className="accomodations-infos">
      <div className="accomodations-infos__title">
        <h1 className="accomodations-infos__title--h1">{accomodation.title}</h1>
        <p className="accomodations-infos__title--p">{accomodation.location}</p>
      </div>
      <div className="accomodations-infos__host">
        {accomodation.host.name}
        <img
          src={accomodation.host.picture}
          alt={accomodation.host.name}
          className="accomodations-infos__host--img"
        />
      </div>
    </div>
  )
}

export default AccomodationsInfos
