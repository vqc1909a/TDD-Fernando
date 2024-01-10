
import React  from "react";
import PropTypes from "prop-types";
import { useForm } from "../hooks";
import uuid4 from "uuid4";

export const TodoForm = React.memo(({handleAddTodo}) => {
  const {description, handleInputChange, handleResetForm} = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length <= 0) return;

    const newTodo = {
      id: uuid4(),
      description,
      done: false
    }
    handleAddTodo(newTodo)
    handleResetForm();
  }

 
  return (
     <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            name="description"
            value={description}
            onChange={handleInputChange}
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
        >
            Agregar
        </button>
    </form>
    )
})


TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
}