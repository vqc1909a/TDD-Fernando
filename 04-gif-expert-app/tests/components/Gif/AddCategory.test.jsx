import {fireEvent, render, screen} from "@testing-library/react";
import { AddCategory } from "../../../src/components/Gif/AddCategory";

describe('tests on component AddCategory', () => { 
  test('component should make to match to the snapshot', () => { 
    const {container} = render(<AddCategory handleAddCategory={() => {}}></AddCategory>);
    expect(container).toMatchSnapshot();
  })

  test('should change the value input', () => { 
    let valueToChange = "One Punch";

    render(<AddCategory handleAddCategory={() => {}}></AddCategory>);
    let inputToChangeValue = screen.getByRole('textbox');
    expect(inputToChangeValue).toBeTruthy();

    //The difference between input and change is that the input event is fired when the value of an input changes, and the change event is fired when the value of an input changes and the input loses focus.

    //The second parameter is the value that we want to change
    fireEvent.change(inputToChangeValue, {target: {value: valueToChange}})
    expect(inputToChangeValue.value).toBe(valueToChange);
    // screen.debug();
  })

  test("should call the function handleAddCategory when let's trigger submit formulary with some value", () => { 
    let valueToChange = "One Punch";
    let handleAddCategory = jest.fn();

    render(<AddCategory handleAddCategory={handleAddCategory}></AddCategory>);
    let inputToChangeValue = screen.getByRole('textbox');
    let formToTriggerSubmit = screen.getByRole('form');
    fireEvent.change(inputToChangeValue, {target: {value: valueToChange}})
    
    //In the event submit, the second parameter is the event object, but we don't need it, so we pass an object with a method preventDefault that does nothing   
    fireEvent.submit(formToTriggerSubmit, {preventDefault(){}});
    expect(inputToChangeValue.value).toBe("");
    
    expect(handleAddCategory).toHaveBeenCalled();
    expect(handleAddCategory).toHaveBeenCalledTimes(1);
    expect(handleAddCategory).toHaveBeenCalledWith(valueToChange);
  })

  test("shouldn't call the function handleAddCategory when let's trigger submit formulary with empty value", () => { 
    let handleAddCategory = jest.fn();

    render(<AddCategory handleAddCategory={handleAddCategory}></AddCategory>);
    let formToTriggerSubmit = screen.getByRole('form');
    // screen.debug();

    //In the event submit, the second parameter is the event object, but we don't need it, so we pass an object with a method preventDefault that does nothing   
    fireEvent.submit(formToTriggerSubmit, {preventDefault(){}});
    expect(handleAddCategory).not.toHaveBeenCalled();
    expect(handleAddCategory).toHaveBeenCalledTimes(0);
  })
})

