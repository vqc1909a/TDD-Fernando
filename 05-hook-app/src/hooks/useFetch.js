import { useEffect, useState } from "react"

export const useFetch = (url) => {
  
  const [state, setState] = useState({
      data: [],
      isLoading: true,
      hasError: false
  })

  const getFetch = async (url) => {
    setState(state => ({ 
        ...state,
        isLoading: true,
    }))

    const resp = await fetch(url)
    const data = await resp.json()
    setState(state => ({
      ...state,       
      data,
      isLoading: false,
      hasError: false 
    }))
  }

  useEffect(() => {
    getFetch(url);
    // eslint-disable-next-line 
  }, [url])
  
  return {
    ...state
  }
}
