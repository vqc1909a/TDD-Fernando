import {render, screen} from "@testing-library/react";
import { GifItemCategory } from "../../../src/components/Gif/GifItemCategory"

describe('tests on component GifItemCategory', () => {

    const title = "Saitama";
    const url = "https://giphy.com/saitama.gif";

    test('component should make to match to the snapshot', () => {
        const {container} = render(<GifItemCategory title={title} url={url}></GifItemCategory>);
        expect(container).toMatchSnapshot();
    })

    test('should show the image and alt indicated correctly', () => { 
        render(<GifItemCategory title={title} url={url}></GifItemCategory>);

        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
    })

    test('should show the title in the component', () => { 
        render(<GifItemCategory title={title} url={url}></GifItemCategory>);

        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByText(title).innerHTML).toContain(title);
    })
 })