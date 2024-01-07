import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

//If we put a biggest value, we feeling a deprecated performance in our machines, probably it be will slowly to the navigate throught it and more
//The problem is that it be will execute when change other state of the component like as show, so it isn't part of the function heavyStuff
const heavyStuff = (iterationNumber= 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahí vamos")
    }
    return `${iterationNumber} iterations doned`
}

export const MemoHook = () => {
  const {counter, handleAddCounter} = useCounter(4000);
  const [show, setShow] = useState(true);

    //We use useMemo to save the value of the function heavyStuff, so if the value of the counter doesn't change, the function heavyStuff doesn't execute again
    //useMemo to save the value of the return callback function, so if the value of the counter change, the callback execute again
  const valueHeavyStuff = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />
        <h4>{valueHeavyStuff}</h4>
        <button
            className="btn btn-primary"
            onClick={ () => handleAddCounter() }
        >
            +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
        >
            {/* We use JSON.stringify to show value boolean as a text in the UI */}
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
