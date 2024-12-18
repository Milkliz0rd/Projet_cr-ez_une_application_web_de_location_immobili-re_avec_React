import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Collapses = ({ collapses }) => {
  const [openCollapses, setOpenCollapses] = useState([]) //Utilisation de useState pour modifier l'état de nos collapses.
  const toggleCollapse = (id) => {
    if (openCollapses.includes(id)) {
      setOpenCollapses(openCollapses.filter((collapseId) => collapseId !== id)) //Dans cette condition, si le tableau openCollapses possèdent des 'id', c'est à dire des éléments que l'on a ouvert soit dans la page 'about' ou 'accomodation', on le modifie avec setOpenCollapses. Au clique, si l'id de l'élément cliqué est déjà dans le tableau openCollapses, celà signifie qu'il est ouvert. Alors avec filter on retire cet id du tableau et cela ferme notre collapse.
    } else {
      setOpenCollapses([...openCollapses, id]) //Dans cette condition, si l'id n'est pas dans le tableau, alors c'est que le collapse est fermé. Avec le spread Operator on récupère déjà tous les id qui se trouvent dans openCollapses et on y ajoute l'id (ce qui ouvre notre collapse).
    }
  }

  return (
    <div className="collapse-container">
      {collapses.map((collapse) => (
        <div key={collapse.id} className="collapse">
          {/* ici, le collapse est fermé */}
          <div className="collapse__header">
            <h3 className="collapse__header--title">{collapse.title}</h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`collapse__header--btn ${openCollapses.includes(collapse.id) ? 'open' : ''}`}
              onClick={() => toggleCollapse(collapse.id)}
            />
          </div>
          {/* ici, le collapse est ouvert */}
          <div
            className={`collapse__content ${openCollapses.includes(collapse.id) ? 'open' : ''}`}
          >
            {collapse.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Collapses
