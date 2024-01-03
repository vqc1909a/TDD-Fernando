import { fireEvent, render, screen, waitFor, renderHook } from "@testing-library/react";
import App from "../src/App";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock('nanoid', () => ({
    nanoid: () => Math.floor(Math.random() * 100) + 1
}));

describe('tests on the component App', () => { 


  test('should show the component with the initial state  ', () => { 
    const {container} = render(<App></App>);
    expect(container).toMatchSnapshot();
  })

  test('should add the array categories when we trigger submit formulary with some value', async () => { 
    render(<App></App>);

    let category = "Naruto"
    let inputToChangeValue = screen.getByRole('textbox');
    let formToTriggerSubmit = screen.getByRole('form');

    fireEvent.change(inputToChangeValue, {target: {value: category}});
    fireEvent.submit(formToTriggerSubmit, {preventDefault(){}});

    //Simply with this renderHook and waitFor, we make the value isLoading will be true so will have gifs, or also we make the other way around, it will be the same
    const { result } = renderHook(() => useFetchGifs(category)); 

    await waitFor(() => {
      const { isLoading } = result.current;
      expect( isLoading ).toBeFalsy();
    }) 
    expect(screen.getAllByRole('generic', {name: 'card-grif'}).length).toBe(2);
  })

  test('should not add the array categories when we trigger submit formulary with empty value', async () => { 
    render(<App></App>);

    let category = ""
    let inputToChangeValue = screen.getByRole('textbox');
    let formToTriggerSubmit = screen.getByRole('form');

    fireEvent.change(inputToChangeValue, {target: {value: category}});
    fireEvent.submit(formToTriggerSubmit, {preventDefault(){}});

    const { result } = renderHook(() => useFetchGifs(category)); 

    await waitFor(() => {
      const { isLoading } = result.current;
      expect( isLoading ).toBeFalsy();
    }) 
    expect(screen.getAllByRole('generic', {name: 'card-grif'}).length).toBe(1);
  })
 })