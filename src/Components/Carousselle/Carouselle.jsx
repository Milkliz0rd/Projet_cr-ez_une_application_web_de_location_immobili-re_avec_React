import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Carouselle = ({ pictures, title }) => {
  // UseState afin de définir et de modifier l'emplacement de l'index dans le carrouselle d'images.
  const [currentIndex, setCurrentIndex] = useState(0)
  function showPicture() {
    return (
      <img
        src={pictures[currentIndex]}
        alt={title}
        className="carouselle__img"
      />
    )
  }
  function prevPicture() {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length) //utilisation de la formule modulo. Ici on dit que le currentIndex doit rester entre la taille du tableau d'images(pictures) et 0 (img numéro une du tableau d'image) car il ne peut y avoir de négatif. Pour cela on additionne la taille du tableau de 'pictures' à notre index et on soustrait 1. Ex: dans le premier logement il y a 5 images dans le carouselle. si on arrive à 0 - 1, nous obtiendrons un indice négatif. Du coup nous faisons 0 - 1 + 5 = 4 qui elle même correpond à la 5eme images du carouselle. Par la suite on utlise le modulo 4 % 5 = le résultat est le reste de la division entière de 4 par 5. Donc 4 est notre position actuelle dans l'index du tableau.
  }
  function nextPicture() {
    setCurrentIndex((currentIndex + 1) % pictures.length) // Utilisation de la formule modulo. Ici on ajoute à l'index du tableau de 'pictures' 1. Par la suite on utilise modulo qui nous donnera la position actuelle de l'index
  }

  const isHidden = pictures.length <= 1
  // Constante qui evite de répéter notre condition de cacher ou non l'index et les flèches de navigation.

  return (
    <div className="carouselle">
      {/* On appel la fonction showPicture qui nous permet de voir la photo selon son index. On y ajoute la const isHidden et selon le nombre de photo, il applique le className 'hidden' ou 'carouselle__index  */}
      {showPicture()}
      <p className={`${isHidden ? 'hidden' : 'carouselle__index'}`}>
        {currentIndex + 1}/{pictures.length}
      </p>
      {/* flèche de navigation qui recule dans la liste d'image avec le onClick prevPicture. On y ajoute la const isHidden et selon le nombre de photo, il applique le className 'hidden' ou 'carouselle__btn &--left'  */}
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={prevPicture}
        className={`${isHidden ? 'hidden' : 'carouselle__btn carouselle__btn--left'}`}
      />
      {/* flèche de navigation qui avance dans la liste d'image avec le onClick nextPicture. On y ajoute la const isHidden et selon le nombre de photo, il applique le className 'hidden' ou 'carouselle__btn &--right' */}
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={nextPicture}
        className={`${isHidden ? 'hidden' : 'carouselle__btn carouselle__btn--right'}`}
      />
    </div>
  )
}

export default Carouselle
