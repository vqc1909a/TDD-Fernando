import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";

describe('Tests on useFetch hook', () => { 
    test('should return a value fetch hook', async() => { 
        const quotes = 5;
        const { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${quotes}`));
        await waitFor(() => {
            const { data } = result.current;
            expect(data.length).toBe(5);
        })
        const { data, isLoading, hasError } = result.current;
        expect(data.length).toBe(quotes);
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeFalsy();
    })

})