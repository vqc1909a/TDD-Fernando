import { useEffect, useState } from "react";
import { getGifsByCategory } from "../helpers/helperGif";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  //By the mode strict in the file main.jsx, the console.log show twice as many times as expected. But in production, it will be once time
  // console.log({
  //   gifs
  // })
  
  const getGifs = async () => {
    const gifs = await getGifsByCategory(category);
    setGifs(gifs);
    setIsLoading(false)
  }

  useEffect(() => {
    getGifs();
    //eslint-disable-next-line
  }, [])


  return {
    gifs,
    isLoading
  };

}
