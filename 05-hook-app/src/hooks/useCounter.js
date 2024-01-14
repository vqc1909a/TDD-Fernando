import { useState } from "react"

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue); 
  
  //Is recommended we use the setState of this way by testing, if we put two or more setState (setCounter(value + 1) and then setCounter(value+2)) in the test, the value will not updated with all setState, only with the last setState
  const handleAddCounter = (value = 1) => {
    setCounter(state => state + value);
  }

  const handleResetCounter = (value = initialValue) => {
    setCounter(value);
  }
  const handleSubtractCounter = (value = 1) => {
    if(counter === 0) return; 
    setCounter(state => state - value);
  }
  return {
    counter,
    handleAddCounter,
    handleResetCounter,
    handleSubtractCounter
  }
}
