import { PropTypes } from "prop-types"

export const GifItemCategory = ({title, url}) => {
  return (
    <div className="card" aria-label="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}
GifItemCategory.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

/* Tarea

1. Añadir PropTypes a GifItemCategory
  a. title obligatorio
  b. url obligatorio

2. Evaluar el snapshot

*/
