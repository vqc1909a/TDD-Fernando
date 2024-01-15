import { render, screen } from "@testing-library/react";
import { TodoList } from "../../src/08-useReducer/TodoList"

describe('tests on TodoList component', () => { 
    let handleDeleteTodo = jest.fn();
    let handleToggleTodo = jest.fn();
    let todos = [
      {
        id: "1",
        description: "task1",
        done: false
      },
      {
        id: "2",
        description: "task2",
        done: false
      },
      {
        id: "3",
        description: "task3",
        done: false
      }
    ]

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show the component by default', () => {
        const { container } = render(<TodoList handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} todos={todos} />);
        expect(screen.getAllByLabelText("li").length).toBe(todos.length);
        expect(container).toMatchSnapshot();
    })


    
})