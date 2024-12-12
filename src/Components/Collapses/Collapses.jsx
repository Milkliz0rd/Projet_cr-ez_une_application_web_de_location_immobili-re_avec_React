import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Collapses = ({ collapses }) => {
  const [openCollapses, setOpenCollapses] = useState([])
  const toggleCollapse = (id) => {
    if (openCollapses.includes(id)) {
      setOpenCollapses(openCollapses.filter((collapseId) => collapseId !== id))
    } else {
      setOpenCollapses([...openCollapses, id]) //spread operator
    }
  }

  return (
    <div className="collapse-container">
      {collapses.map((collapse) => (
        <div key={collapse.id} className="collapse">
          <div className="collapse__header">
            <h3 className="collapse__header--title">{collapse.title}</h3>
            <FontAwesomeIcon
              style={{ height: '32px', width: 'auto' }}
              icon={faChevronUp}
              className={`collapse__header--btn ${openCollapses.includes(collapse.id) ? 'open' : ''}`}
              onClick={() => toggleCollapse(collapse.id)}
            />
          </div>
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
