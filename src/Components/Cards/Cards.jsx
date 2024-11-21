import React from 'react'
import accomodations from '../../Datas/datas.json'

const Cards = () => {
  return (
    <div className="cards-container">
      {accomodations.map(({ id, title }) => (
        <article key={id} className="cards-article">
          {title}
        </article>
      ))}
    </div>
  )
}

export default Cards
