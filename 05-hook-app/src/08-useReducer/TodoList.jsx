
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import React from "react";

export const TodoList = React.memo(({todos, handleDeleteTodo, handleToggleTodo}) => {
  // console.log("Ejecutando todolist")
  return (
    <ul className="list-group">
        {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
        ))}
    </ul>
    )
})


TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleTodo: PropTypes.func.isRequired
}