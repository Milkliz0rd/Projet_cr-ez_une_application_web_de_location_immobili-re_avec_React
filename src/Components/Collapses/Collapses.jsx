import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Collapses = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggleCollapse() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="collapse-container">
      <div className="collapse-fiability">
        <h3 className="collapse-fiability__title">Fiabilité</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-fiability__btn ${isOpen ? 'open' : ''}`}
          onClick={toggleCollapse}
        />
      </div>
      <div className={`collapse-fiability__content ${isOpen ? 'open' : ''}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi enim
        neque sint! Repellat dignissimos, dolores iusto eius dolorem excepturi
        eos quos dolore laborum aperiam repudiandae. Iusto atque amet vitae quo.
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
