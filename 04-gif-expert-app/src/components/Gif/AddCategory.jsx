import { useState } from "react"
import PropTypes from 'prop-types'


const DEFAULT_VALUE = "";
 
export const AddCategory = ({handleAddCategory}) => {
  
  const [inputValue, setInputValue] = useState(DEFAULT_VALUE);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if(inputValue.trim()){
      handleAddCategory(inputValue);
      setInputValue(DEFAULT_VALUE);
    }
  } 
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Buscar gifts" value={inputValue} onChange={handleInputChange}/>
    </form>
  )
}

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired
}