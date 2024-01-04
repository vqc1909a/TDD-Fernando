import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue); 

  const handleAddCounter = (value = 1) => {
    setCounter(counter + value);
  }

  const handleResetCounter = (value = initialValue) => {
    setCounter(value);
  }
  const handleSubtractCounter = (value = 1) => {
    if(counter === 0) return;
    setCounter(counter - value);
  }
  return {
    counter,
    handleAddCounter,
    handleResetCounter,
    handleSubtractCounter
  }
}
