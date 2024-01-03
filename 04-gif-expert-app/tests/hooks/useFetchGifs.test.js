import { renderHook, waitFor } from "@testing-library/react";

// import { getGifsByCategory } from "../helpers/helperGif";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test on hook useFetchGifs', () => { 
  test('should get the initial state', () => {
    const category = "One Punch";
    //renderHook is a function that allows us to test custom hooks 
    const { result } = renderHook(() => useFetchGifs(category)); 
    //result.current show us the initial state of the hook
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
    expect(isLoading).toBeTruthy(); 
  })  

  test('should get the array gifs with elements and the isLoading with the value false', async () => {
    const category = "One Punch";
    const { result } = renderHook(() => useFetchGifs(category)); 
    
    //waitFor is a function that allows us to wait for the result of the hook
    await waitFor(() => {
      //here we put the result of the hook because of out of this, it be not access to variables declarated
      const { gifs } = result.current;
      expect(gifs.length).toBeGreaterThan(0);
    }) 

    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(10);
    expect(isLoading).toBeFalsy();
  })  

}) 

