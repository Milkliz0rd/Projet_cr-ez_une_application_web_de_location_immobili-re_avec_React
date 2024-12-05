import React, { useState } from 'react'

const Carousselle = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  function showPicture() {
    return <img src={pictures[currentIndex]} alt={title} />
  }
  function prevPicture() {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length) //le modulo
  }
  function nextPicture() {
    setCurrentIndex((currentIndex + 1) % pictures.length) // le modulo
  }
  return (
    <div className="carousselle">
      {showPicture()}
      <button onClick={prevPicture}>Précédent</button>
      <button onClick={nextPicture}>Suivant</button>
    </div>
  )
}

export default Carousselle
