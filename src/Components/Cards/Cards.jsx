import React from 'react'
import accomodations from '../../Datas/datas.json'

const Cards = () => {
  return (
    <div className="cards-container">
      {accomodations.map(({ id, title, cover }) => (
        <article key={id} className="cards-article">
          <img className="cards-img" src={cover} alt="photos des locations" />
          <h2 className="cards-title">{title}</h2>
        </article>
      ))}
    </div>
  )
}

export default Cards
