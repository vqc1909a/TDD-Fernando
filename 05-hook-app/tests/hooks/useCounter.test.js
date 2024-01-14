import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('Tests on the useCounter hook', () => { 

    test('should return the default values', () => {
        const initialValue = 10;
        const { result } = renderHook(() => useCounter(initialValue));
        
        expect(result.current).toEqual({
            counter: initialValue,
            handleAddCounter: expect.any(Function),
            handleSubtractCounter: expect.any(Function),
            handleResetCounter: expect.any(Function),
        });
    })

    test('should return the useCounter with the value 100', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    })

    test('should increment to the execute handleAddCounter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { handleAddCounter } = result.current;
        act(() => {
            handleAddCounter();
            handleAddCounter(2);
        });
        //We need to access again to the result.current because of the each time that we execute the act, the result.current is updated
        const { counter } = result.current;
        expect(counter).toBe(initialValue + 3);
    })

    test('should decrement to the execute handleSubstractCounter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { handleSubtractCounter } = result.current;
        act(() => {
            handleSubtractCounter();
            handleSubtractCounter(2);
        });
        //We need to access again to the result.current because of the each time that we execute the act, the result.current is updated
        const { counter } = result.current;
        expect(counter).toBe(initialValue - 3);
    })

    test('should reset to the execute handleResetCounter', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { handleResetCounter, handleAddCounter, handleSubtractCounter } = result.current;
        act(() => {
            handleAddCounter();
            handleSubtractCounter();
            handleResetCounter();
        });
        //We need to access again to the result.current because of the each time that we execute the act, the result.current is updated
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    })

})