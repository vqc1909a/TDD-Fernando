import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] =  useState(10);

  //This useCallback work together with the React.memo in the ShowIncrement component, so if the memory position of the function has changed, the component ShowIncrement will be rendered again, but if the memory position of the function hasn't changed, the component ShowIncrement won't be rendered again 
  const increment = useCallback((value) => {
    setCounter(state => state + value)
  }, [])



  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={increment}/>
    </>
  )
}
