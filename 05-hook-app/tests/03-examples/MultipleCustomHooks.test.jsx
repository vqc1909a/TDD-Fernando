import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

//When we apply the mock, we should point to the exact path of the file that we want to mock and not the file index.js that is export this file and others more files together, common called as barrel
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('test on MultipleCustomHooks component', () => { 

    const handleAddCounter = jest.fn();
    useCounter.mockReturnValue({
        handleAddCounter,
        counter: 1
    })

    //Before each test, we need to clear all the mocks, by example, if we have a mock that is called 3 times, and we want to test that is called 4 times, we need to clear all the mocks before to execute the test
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show the component by default', () => {
        useFetch.mockReturnValue({
            data: [],
            isLoading: true,
            hasError: false
        })
        //Other way to performance the test
        render(<MultipleCustomHooks />)
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        //The property name make reference to the aria-label property of the button or its content, any of them
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
    })

    // test('should show a quote of the first way with the sentence waitFor', async () => {
    //     render(<MultipleCustomHooks />)
    //     //The quantity of quotes is defined in the useFetch hook, and not matters to define it here
    //     const  { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`));

    //     await waitFor(() => {
    //         const { data } = result.current;
    //         expect(data.length).toBe(1);
    //     })
    //     //contentinfo is a role that is used for the footer
    //     expect(screen.getAllByRole('contentinfo', {name: "quote"}).length).toBe(1);
    // })

    test('should show a quote of the second way with mocks (recommended because renderHook is only for test hooks no else)', async () => {
        useFetch.mockReturnValue({
            data: [{
                author: "vqc1909a",
                quote: "The special one"
            }],
            isLoading: false,
            hasError: false
        })
       
        render(<MultipleCustomHooks />)
        expect(screen.getByText('The special one')).toBeTruthy();
        expect(screen.getAllByRole('contentinfo', {name: "quote"}).length).toBe(1);

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
    })

    test('should call the function handleAddCounter to the execute the button', async () => {
        useFetch.mockReturnValue({
            data: [{
                author: "vqc1909a",
                quote: "The special one"
            }],
            isLoading: false,
            hasError: false
        })

        render(<MultipleCustomHooks />)
        
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);
        expect(handleAddCounter).toHaveBeenCalled();
    })
})