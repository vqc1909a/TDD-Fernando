import { render } from "@testing-library/react";
import { TodoApp} from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");
describe('tests on TodoApp component', () => {
    
    useTodos.mockReturnValue({
        todos: [
            {id: "1", description: "Todo #1", done: true},
            {id: "2", description: "Todo #2", done: false},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleAddTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    })

    //Just is neccesary show the component by default because the components inside the component TodoApp will be tested already 
    test('should show the component by default', () => { 
        const { container } = render(<TodoApp />);
        expect(container).toMatchSnapshot();
    })
})