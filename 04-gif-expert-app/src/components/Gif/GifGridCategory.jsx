import { PropTypes } from "prop-types"
import { GifItemCategory } from "../../components/Gif";
import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGridCategory = ({category}) => {  
  const { gifs, isLoading }  = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>  
      {
        isLoading
        ?
        <p>Loading...</p>
        :
        <div className="card-grid" aria-label="card-grif">
          {gifs.map(image => <GifItemCategory key={image.id} {...image}></GifItemCategory>)}
        </div>
      }
    </>
  )
}

GifGridCategory.propTypes = {
  category: PropTypes.string.isRequired
}

