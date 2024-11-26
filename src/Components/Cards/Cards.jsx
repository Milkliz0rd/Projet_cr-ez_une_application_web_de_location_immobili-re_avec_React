import React from 'react'
import accomodations from '../../Datas/datas.json'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <div className="cards-container">
      {accomodations.map(({ id, title, cover }) => (
        <NavLink to="/Accommodation" className="cards-container__navlink">
          <article key={id} className="cards-container__navlink--article">
            <img
              className="article__img"
              src={cover}
              alt="photos des locations"
            />
            <h2 className="article__title">{title}</h2>
          </article>
        </NavLink>
      ))}
    </div>
  )
}

export default Cards
