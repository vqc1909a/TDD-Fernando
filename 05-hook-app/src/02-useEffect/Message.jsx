import { useEffect, useState } from "react"


//how this component Message is rendered conditionally, the listener in the useEffect will be created each time the component is rendered
export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})

    const listenerMouseMove = (e) => {
      const {x, y} = e;
      setCoords({x, y});
    }
    
    useEffect(() => {
      window.addEventListener('mousemove', listenerMouseMove)
      console.log("Message Mounted")
      //This return o also called clean function, is a function that is executed when the component is unmount. By example, if we have a subscription to a socket, we need to unsubscribe when the component is unmount. Or if we have a setInterval, we need to clear the interval when the component is unmount. Or if we have a listener to a scroll event, we need to remove the listener when the component is unmount. Or if we have a listener to a window resize event, we need to remove the listener when the component is unmount. Even if we have a listener to a document click event, we need to remove the listener when the component is unmount. All these to avoid memory leaks.
      return () => {
        window.removeEventListener('mousemove', listenerMouseMove);
      }
    }, [])

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords, 0, 2)}

    </>
  )
}
