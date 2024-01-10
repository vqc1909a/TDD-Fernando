import { useCallback, useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const useTodos = () => {
    //We use the third argument of the useReducer to initialize the state of the reducer    
    const [todos, dispatch] = useReducer(todoReducer, [], init); 

    //The recommended is we have my functions that changed the state in the father component
    const handleAddTodo = useCallback((todo) => {
        dispatch({
            type: "addTodo",
            payload: todo
        })
    }, []);

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "deleteTodo",
            payload: id
        })
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "toggleTodo",
            payload: id
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
