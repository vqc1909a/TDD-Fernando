
import PropTypes from "prop-types";
import React from "react";

export const TodoItem = React.memo(({description, id, done ,handleDeleteTodo, handleToggleTodo}) => {
  return (
    <li aria-label="li" className="list-group-item d-flex justify-content-between">
      <span aria-label="span" style={{cursor: 'pointer'}} className={`align-self-center flex-fill ${done ? 'text-decoration-line-through': ''}`} onClick={() => handleToggleTodo(id)}>{description}</span>
      <button aria-label="button" className="btn btn-danger" onClick={() => handleDeleteTodo(id)}>Borrar</button>
    </li>
    )
})


TodoItem.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
}

