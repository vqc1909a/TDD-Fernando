import { fireEvent, render, screen } from "@testing-library/react";
import { TodoForm } from "../../src/08-useReducer/TodoForm";

describe('tests on component TodoForm', () => { 

    const handleAddTodo = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show the component by default', () => {
        const { container } = render(<TodoForm handleAddTodo={handleAddTodo}/>)
        expect(container).toMatchSnapshot();
    })

    test('should change input form', () => {
        render(<TodoForm handleAddTodo={handleAddTodo}/>)
        const valueToChange = "Aprender React"
        const inputElement = screen.getByLabelText("input");
        fireEvent.change(inputElement, {target: {name: "description", value: valueToChange}});
        expect(inputElement.value).toBe(valueToChange);
    })
    test('should submit form', () => {
        render(<TodoForm handleAddTodo={handleAddTodo}/>)
        const valueToChange = "Aprender React"
        const inputElement = screen.getByLabelText("input");
        fireEvent.change(inputElement, {target: {name: "description", value: valueToChange}});
        fireEvent.submit(inputElement, {preventDefault: () => {}});
        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({id: expect.any(String), description: valueToChange, done: expect.any(Boolean)});
        expect(inputElement.value).toBe("");
    })
})