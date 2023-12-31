import { PropTypes } from "prop-types"

export const GifItemCategory = ({title, url}) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}
GifItemCategory.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
