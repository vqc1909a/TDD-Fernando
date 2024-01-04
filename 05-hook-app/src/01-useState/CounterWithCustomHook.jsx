import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
  // Of this way, with this hook we have my businnes logic centralized inside the hook, and we need to add other logic implementation, we only to add it inside the hook, and not in the component. 
  const { handleAddCounter, handleResetCounter, handleSubtractCounter, counter} = useCounter(10);

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />
        <button className="btn btn-primary" onClick={() => handleAddCounter()}>+1</button>
        <button className="btn btn-primary" onClick={() => handleResetCounter()}>Reset</button>
        <button className="btn btn-primary" onClick={() => handleSubtractCounter()}>-1</button>

    </>

  )
}

export default CounterWithCustomHook