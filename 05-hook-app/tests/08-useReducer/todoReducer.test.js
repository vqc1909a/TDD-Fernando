import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('tests on todoReducer.testjs', () => { 
    const initialState = [
    {
        id: 1,
        description: 'Demo Todo',
        done: false,
    },
    {
        id: 2,
        description: 'Demo Todo 2',
        done: false,
    }
    ]
    test("should return the state by default of reducer", () => {
        //Here we not need to use the renderHook because the reducer is a pure function and not dependent any hook or context or something like that
        const state = todoReducer(initialState, {})
        expect(state).toBe(initialState)
    })

    test('should add one todo', () => { 
        const newTodo = {
            id: 3,
            description: 'Demo Todo 3',
            done: false,
        }
        const action = {
            type: 'addTodo',
            payload: newTodo
        }
        const state = todoReducer(initialState, action)
        expect(state).toEqual([...initialState, newTodo])
        expect(state.length).toBe(3);
        expect(state).toContain(newTodo);
    })
    test('should delete one todo', () => { 
        const action = {
            type: 'deleteTodo',
            payload: 2
        }
        const state = todoReducer(initialState, action)
        expect(state.length).toBe(1);
        expect(state).not.toContain(initialState[1]);
    })
    
    test('should toggle one todo', () => { 
        const action = {
            type: 'toggleTodo',
            payload: 2
        }
        const state = todoReducer(initialState, action)
        expect(state.length).toBe(2);
        expect(state[1].done).toBe(!initialState[1].done);
    })
})