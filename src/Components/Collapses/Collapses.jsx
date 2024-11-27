import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Collapses = () => {
  return (
    <div className="collapse-container">
      <div className="collapse-fiability">
        <h3 className="collapse-fiability__title">Fiabilité</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="collapse-fiability__btn"
        />
      </div>
      <div className="collapse-respect">
        <h3 className="collapse-respect__title">Respect</h3>
        <FontAwesomeIcon icon={faChevronUp} className="collapse-respect__btn" />
      </div>
      <div className="collapse-services">
        <h3 className="collapse-services__title">Services</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="collapse-services__btn"
        />
      </div>
      <div className="collapse-security">
        <h3 className="collapse-security__title">securité</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="collapse-security__btn"
        />
      </div>
    </div>
  )
}

export default Collapses
