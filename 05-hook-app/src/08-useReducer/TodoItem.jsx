
import PropTypes from "prop-types";
import React from "react";

export const TodoItem = React.memo(({description, id, done ,handleDeleteTodo, handleToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span style={{cursor: 'pointer'}} className={`align-self-center flex-fill ${done ? 'text-decoration-line-through': ''}`} onClick={() => handleToggleTodo(id)}>{description}</span>
      <button className="btn btn-danger" onClick={() => handleDeleteTodo(id)}>Borrar</button>
    </li>
    )
})


TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired,
}

