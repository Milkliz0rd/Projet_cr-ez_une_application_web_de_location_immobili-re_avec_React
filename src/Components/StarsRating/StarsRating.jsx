import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const StarsRating = ({ rating, maxStars = 5 }) => {
  const [stars, setStars] = useState(5)
  return (
    <div>
      <FontAwesomeIcon icon={faStar} className="stars-empty" />
    </div>
  )
}

export default StarsRating
