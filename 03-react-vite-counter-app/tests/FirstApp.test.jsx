import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        //El render expone propiedades relacionadas a React Testing Library
        // * container: Es como un nodo de HTML
        // * toMatchSnapshot(): Toma una fotografía del componente envuelto y lo deja almacenado en la carpeta __snapshots__, esto como una evidencia de como quedo tal componente y que al día si sguiente alguien cambia algo del componente, ya sabremos que es lo que modifico. Y también podemos actualizare el snapshot con ese ultimo cambio que hicimos
        
        // NOTA: El toMathSnapshot(), no verifica el contenido dinámico del componente, como el texto, los valores de los atributos o el estado interno. Esto es porque los valores cambiantes podrían hacer que las pruebas fallen constantemente, incluso si el cambio es válido.

        const title = "Hola, soy Goku"
        const {container, getByText} = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');

        expect(h1.textContent).toContain(title);
        expect(23).toContain(2)
    })

});