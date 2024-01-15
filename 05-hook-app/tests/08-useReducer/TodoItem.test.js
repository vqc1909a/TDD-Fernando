import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('tests on TodoItem component', () => { 
    let handleDeleteTodo = jest.fn();
    let handleToggleTodo = jest.fn();
    let id = "1";
    let description = "task1";
    let done = false;

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show the component by default', () => {
        const { container } = render(<TodoItem handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} id={id} description={description} done={done} />);
        //We can get to the node element with the prop aria-label directly with the method getByLabelText
        const spanElement = screen.getByLabelText("span");
        expect(spanElement).toBeTruthy();
        expect(spanElement.textContent).toContain(description);
        expect(spanElement.classList.contains('text-decoration-line-through')).toBeFalsy();
        expect(spanElement.className).not.toContain('text-decoration-line-through');
        expect(container).toMatchSnapshot()
    })


    test('should show the component with todo completed', () => {
        done = true;
        render(<TodoItem handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} id={id} description={description} done={done} />);
        //We can get to the node element with the prop aria-label directly with the method getByLabelText
        const spanElement = screen.getByLabelText("span");
        expect(spanElement).toBeTruthy();
        expect(spanElement.classList.contains('text-decoration-line-through')).toBeTruthy();
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('should call the function handleToggleTodo when trigger the click span', () => { 
        render(<TodoItem handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} id={id} description={description} done={done} />);
        const spanElement = screen.getByLabelText("span");
        // spanElement.click(); //This property od node element is equal to fireEvent.click
        fireEvent.click(spanElement);
        expect(handleToggleTodo).toHaveBeenCalled();
        expect(handleToggleTodo).toHaveBeenCalledTimes(1);
        expect(handleToggleTodo).toHaveBeenCalledWith(id);
    })

    test('should call the function handleDeleteTodo when trigger the click button', () => { 
        render(<TodoItem handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} id={id} description={description} done={done} />);
        const buttonElement = screen.getByLabelText("button");
        // buttonElement.click(); //This property od node element is equal to fireEvent.click
        fireEvent.click(buttonElement);
        expect(handleDeleteTodo).toHaveBeenCalled();
        expect(handleDeleteTodo).toHaveBeenCalledTimes(1);
        expect(handleDeleteTodo).toHaveBeenCalledWith(id);
    })
})