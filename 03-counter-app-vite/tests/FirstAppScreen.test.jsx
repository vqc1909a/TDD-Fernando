import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp /> with screen', () => {

    const title = "Hola, soy Goku";
    const subTitle =  "Hola, Soy el subtitulo";

    test('should make to match to the snapshot', () => { 
        const {container} = render(<FirstApp title={title} subTitle={subTitle} />)
        expect(container).toMatchSnapshot();
    })

    test('should show the message "Hola, Soy Goku"', () => { 
        
        //screen is the object that we be rendering in one each test with the sentence render, of way automatic 
        render(<FirstApp title={title} subTitle={subTitle} />)
        screen.debug(); /* With this sentence we look the component rendered, i same the html generated, in a first instance it's be the tag <body />, but if before we rendering a component, then the screen will be the componente rendering */
        expect(screen.getByText(title)).toBeTruthy ();
    })

    test('should show title in one h1', () => {
        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
        expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(title);
    })

    test('should show subTitles that have be send in props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />)
        expect(screen.getAllByText(subTitle)).toBeTruthy();
        expect(screen.getAllByText(subTitle).length).toBe(2);
        expect(screen.getAllByText(subTitle)[0].textContent).toContain(subTitle);
        expect(screen.getAllByText(subTitle)[0].innerHTML).toContain(subTitle);


    })
});