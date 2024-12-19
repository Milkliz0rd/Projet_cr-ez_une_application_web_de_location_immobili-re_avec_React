import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const StarsRating = ({ rating }) => {
  const totalStars = 5
  return (
    <div className="stars">
      {Array.from({ length: totalStars }, (_, index) => (
        // ici on utilise Array.from pour créer un nouveau tableau à partir de total stars. Comme il n'y a pas de paramètre à proprement parlé, on ajout '_' comme premier paramètre.
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < rating ? 'stars__full' : 'stars__empty'} // Ici on applique la condition de 'Si l'index est plus petit rating alors on applique la className 'stars__full' sinon on applique la className 'stars__empty'.
        />
      ))}
    </div>
  )
}

export default StarsRating
