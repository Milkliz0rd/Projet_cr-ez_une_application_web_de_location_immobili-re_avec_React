import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const StarsRating = ({ rating }) => {
  const totalStars = 5
  return (
    <div className="stars">
      {Array.from({ length: totalStars }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < rating ? 'stars__full' : 'stars__empty'}
        />
      ))}
    </div>
  )
}

export default StarsRating
