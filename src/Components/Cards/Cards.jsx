import React from 'react'
import accomodations from '../../Datas/datas.json'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <div className="cards-container">
      {accomodations.map((accommodation) => (
        <NavLink
          key={accommodation.id}
          to={`/Accommodation/${accommodation.id}`}
          className="cards-container__navlink"
          state={{ accommodation }}
        >
          <article className="cards-container__navlink--article">
            <img
              className="article__img"
              src={accommodation.cover}
              alt={`photos de ${accommodation.title}`}
            />
            <div className="article__container">
              <h2 className="article__container--title">
                {accommodation.title}
              </h2>
            </div>
          </article>
        </NavLink>
      ))}
    </div>
  )
}

export default Cards
