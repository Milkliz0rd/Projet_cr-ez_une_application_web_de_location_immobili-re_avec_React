import React from 'react'
import accomodations from '../../Datas/datas.json'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <div className="cards-container">
      {/* Partie qui servira au Navlink pour rediriger à la page de la location cliqué  */}
      {accomodations.map((accommodation) => (
        <NavLink
          key={accommodation.id} //utilisation de l'id prop de chaque logement
          to={`/Accomodation/${accommodation.id}`} //l'id de l'appartement apparaîtra dans l'url de la page de l'élément cliqué grace à useParam (se trouve sur la page 'AccomodationsSheets')
          className="cards-container__navlink"
          state={{ accommodation }} //utilisation de state pour tranférer les données dynamiquement via Navlink à la page AccommodationSheet propre à la card cliqué.
        >
          {/*Image et le titre du logement en question */}
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
