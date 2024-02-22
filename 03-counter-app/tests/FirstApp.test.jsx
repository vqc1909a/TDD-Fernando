import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {

        // * render: El render renderiza el componente en memoria
        // * container: Es el html renderizado por render
        // * toMatchSnapshot(): Compara el componente renderizado con el snapshot que se tiene actualmente y toma una fotografía del componente renderizado y lo deja almacenado en la carpeta __snapshots__, esto como una evidencia de como quedo tal componente y que al día si sguiente alguien cambia algo del componente, ya sabremos que es lo que modifico. Esta actualización del snapshot lo podemos hacer presionando la tecla 'u' cuando se solicite.
        
        // NOTA: El toMathSnapshot(), no verifica el contenido dinámico del componente, como el texto, los valores de los atributos o el estado interno. Esto es porque los valores cambiantes podrían hacer que las pruebas fallen constantemente, incluso si el cambio es válido.

        const title = "Hola, soy Goku"
        const {container} = render(<FirstApp title={title} subTitle={"Hola, Soy el subtitulo"} />)
        expect(container).toMatchSnapshot();
    })
    test('debe de mostrar el título enviado por props', () => {
        const title = "Hola, soy Goku"
        const {container, getByText, getByTestId} = render(<FirstApp title={title} subTitle={"Hola, Soy el subtitulo"} />)
        //container is a DOM, then we use sentences as querySelector, querySelectorAll, etc
        const h1 = container.querySelector('h1');
        expect(getByText(title)).toBeTruthy();
        expect(h1.textContent).toBe(title);
        //This sentence is better for calculate text content with or without spaces and it don't make me mistakes
        expect(h1.textContent).toContain(title);

        //this sentence calculate me the elements DOM that have the attribute data-testid and that its value is 'test-title' in this case
        expect(getByTestId('test-title').textContent).toContain(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);
    })
    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = "Hola, soy Goku"
        const subtitle = "Hola, soy el subtitulo"

        const { getByText, getAllByText } = render(<FirstApp title={title} subTitle={subtitle} />);
        // expect(getByText(subtitle)).toBeTruthy();
        // expect(getByText(subtitle).textContent).toContain(subtitle);

        expect(getAllByText(subtitle)).toBeTruthy();
        expect(getAllByText(subtitle).length).toBe(2);
        expect(getAllByText(subtitle)[0].textContent).toContain(subtitle);
        expect(getAllByText(subtitle)[0].innerHTML).toContain(subtitle);
    })
});