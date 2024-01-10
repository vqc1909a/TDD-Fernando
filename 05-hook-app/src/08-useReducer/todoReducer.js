
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'addTodo':
        return [
            ...initialState,
            action.payload
        ]   
    case 'deleteTodo':
        return initialState.filter(todo => todo.id !== action.payload)

    case 'toggleTodo':
        return initialState.map(todo => todo.id.toString() === action.payload.toString() ? ({...todo, done: !todo.done}) : todo)

    default:
        return initialState
  }
    
}
