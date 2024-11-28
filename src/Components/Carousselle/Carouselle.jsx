import React from 'react'

const Carouselle = ({ pictures }) => {
  return (
    <div className="carousselle">
      {pictures.map((pic, index) => (
        <ul key={index}>
          <li>
            <img src={pic} alt="" />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Carouselle
