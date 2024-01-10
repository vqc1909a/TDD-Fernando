const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    donce: false,
}]

const todoReducer = (state = initialState, action = {}) => {
    if(action.type === "add"){
        return [...state, action.payload]
    }
    //The reducer always return a new state object, it mean return a new object,  new array, etc whithout matter its content in these previous cases
    return state
}


let todos = todoReducer()
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({
    todos
})