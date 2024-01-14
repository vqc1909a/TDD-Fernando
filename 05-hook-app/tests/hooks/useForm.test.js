import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Tests on useForm hook', () => { 
    const user = {
        name: 'Victor',
        email: 'vqc1909a@gmail.com'
    }
    test('should return the value by default', () => {
        const { result } = renderHook(() => useForm(user))
        expect(result.current).toEqual({
            formState: user,
            name: user.name,
            email: user.email,
            handleInputChange: expect.any(Function),
            handleResetForm: expect.any(Function),
        });
    })

    test('should change input form', () => {
        const value = "Victor2";
        const { result } = renderHook(() => useForm(user))
        const { handleInputChange } = result.current;
        act(() => {
            handleInputChange({target: {name: 'name', value}})
        });
        const { formState, name } = result.current;
        expect(formState).not.toEqual(user);
        expect(formState.name).toBe(value);
        expect(name).toBe(value);
    })

    test('should reset form', () => {
        const value = "Victor2";
        const { result } = renderHook(() => useForm(user))
        const { handleResetForm, handleInputChange } = result.current;
        act(() => {
            handleInputChange({target: {name: 'name', value}})
            handleResetForm()
        });
        const { formState, name } = result.current;
        expect(formState).toEqual(user);
        expect(formState.name).toBe(user.name);
        expect(name).toBe(user.name);
        
    })
})