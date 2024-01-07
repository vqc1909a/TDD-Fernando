import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const {counter, handleAddCounter} = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter: <Small counter={counter}></Small></h1>
        <hr />
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
