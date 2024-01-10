import {TodoList} from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodos } from "../hooks";



export const TodoApp = () => {
    //It's recommended that we use the hook useTodos only in the father component, and then we pass the functions and the state to the children components, because we use the hook in the children components, will have two or more instances of own hook and it will trigger a leak memory
    const { handleAddTodo, handleDeleteTodo, handleToggleTodo, todos, todosCount, pendingTodosCount } = useTodos();
  
  return (
    <>
     <h1>TodoApp ({todosCount}) <small>pendientes: {pendingTodosCount}</small></h1>
     <hr />

     <div className="row">
        <div className="col-7">
            <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoForm handleAddTodo={handleAddTodo} />
        </div>
     </div>

    </>
  )
}
