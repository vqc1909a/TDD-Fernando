import {render, screen} from "@testing-library/react";
import { GifGridCategory } from "../../../src/components/Gif";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

// When we make a mock the one function, it will be applicated to each test
jest.mock('../../../src/hooks/useFetchGifs');

describe('tests on component GifGridCategory', () => {
  test('should show the component correctly', () => {

    //For return a value of the mock function, we need to use the function mockReturnValue
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });

    const category = "One Punch";
    const {container} = render(<GifGridCategory category={category} />)
    expect(container).toMatchSnapshot();
  })

  test('should show the loading correctly', () => {

    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });

    const category = "One Punch";
    render(<GifGridCategory category={category} />)
    expect(screen.getByText('Loading...')).toBeTruthy();

  })

  test('should show gifs when the hook useFetchGifs is loaded with the gifs', () => { 
    const gifs = [
        {
          id: '1',
          title: 'Saitama',
          url: 'https://localhost/saitama.jpg'
        },
        {
          id: '2',
          title: 'Goku',
          url: 'https://localhost/goku.jpg'
        }
    ]
    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: false
    });

    const category = "One Punch";
    render(<GifGridCategory category={category} />)
    expect(screen.getAllByRole('generic', {name: 'card'}).length).toBe(gifs.length);
    expect(screen.getAllByRole('img').length).toBe(gifs.length);

  })
})