## Recomendación
*Lo que se recomienda es trabajar con yarn mis dependencias locales y con npm mis dependencias globales y crear el proyecto con Vite que es más rápido*

## React + Vite: CounterApp

1. Clonar o instalar con el siguiente comando
    ```javascript
    yarn create vite
    ```

2. Ejecutar el comando:
    ```javascript
    yarn install
    ```

3. Correr la aplicación
    ```javascript
    yarn dev
    ```

## Instalar prop-types

```javascript
    yarn add prop-types
```

## Ejecutar Tests (https://jestjs.io/docs/next/getting-started)

* Introducción a las pruebas

* AAA

* Arrange - Arreglar

* Act - Actuar
 
* Assert - Afirmar
 
* Primeras pruebas
 
* Jest
 
* Expect
 
* toBe
 
* Enzyme
 
* Comandos útiles en la terminal para pruebas
 
* Revisar elementos renderizados en el componente

* Simular eventos

Esta sección de pruebas es sumamente importante porque nos dará la base de las pruebas que estaremos haciendo durante el curso, las pruebas irán creciendo en complejidad, por lo que les recomiendo que nos aseguremos de comprender bien todos estos conceptos para que nos sea más fácil las siguientes secciones de pruebas.

1. Instalar test en desarrollo
    ```javascript
        yarn add --dev jest | npm install --save-dev jest
    ```
    ***NOTA: Si estás trabajando con CRA, react ya viene instalado con react-testing-library y jest***
2. Instalar los tipados de jest que me sirven para el autocompletado de intelligence y cierta sintaxis de typescript
    ```javascript
        yarn add -D @types/jest | npm install -D @types/jest
    ```
3. En tu package.json, aumentar lo siguiente, watchAll es para ejecutar todos los tests y se actualizen cada vez que cambiemos el contenido de los tests
    ```javascript
    "scripts": {
        "test": "jest --watchAll"
    },
    ```

4. Necesitas agregar la configuración de babel para que puedas importar en tus scripts

    Para ello primero necesitas instalas las dependencias de babel para javascript y react
    ```javascript
        yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react
    ```
    
    Luego creas un archivo llamado babel.config.js y dentro de ello agregar la sigueinte configuración según la documentación de jest
    ```javascript
        module.exports = {
            presets: [
                ['@babel/preset-env', {targets: {esmodules: true, node: 'current'}}],
                [ '@babel/preset-react', { runtime: 'automatic' } ],
            ],
        };
    ```
    NOTA: Configure Babel para orientar su versión actual de Node creando un archivo babel.config.js en la raíz de su proyecto (Babel debe transpilar tu código a una versión que sea compatible con el entorno actual de Node.js en el que se está ejecutando tu aplicación. Esto es útil para asegurarse de que el código sea compatible y funcione correctamente en la versión específica de Node.js que estás utilizando) Y el preset @babel/preset-react permite a Babel comprender y transpilar características específicas de React, como el JSX.
5. Crear archivo jest.config.js y jest.setup.js en la raíz (BASICAMENTE PARA CREAR POLYFILLS QUE LE FALTEN A TUS TEST)

    Al crear el jest.config.js se ejecuta justo antes de iniciar los test, dentro de ese archivo manda a llamar jest.setup.js y aqui se necuentra codigo de javsacript

    * jest.config.js
        ```javascript
            module.exports = {
                testEnvironment: 'jest-environment-jsdom',
                setupFiles: ['./jest.setup.js']
            }
        ```
        NOTA: testEnvironment: Esta propiedad especifica el entorno en el que Jest ejecutará las pruebas. En este caso, se está utilizando 'jest-environment-jsdom', que es un entorno que simula el DOM (Document Object Model) de un navegador en el entorno de Node.js. Esto es útil para probar código que interactúa con el DOM, como scripts que manipulan elementos HTML. => "yarn add -D jest-environment-jsdom"

    
    * jest.setup.js
        ```javascript
            import 'whatwg-fetch';
        ```
        NOTA:
        * ESte paquete no es necesario si estas trabajdno con node mayor a 18.0.0, si es menor si lo necesitas
        * Antes de poner esto tenemso que instalar dicho paquete para poder realizar solicitudes con fetch en tus tests => "yarn add -D whatwg-fetch"

6. Crear la carpeta tests 

    Crear la carpeta tests dentro de la carpeta raíz y crear los tests como un espejo de tus archivo y carpetas solo que tendrás la extensión test.js

7. Crear un test por lo menos en cada uno de tus archivos

    Debemos de tener un test al menos por achivo para no tener errores al correr yarn test, esto lo creamos con test('', () => {}) y dentro de cada test debemos de hacer expcepciones si o si ya sea con throw new Error() o dejarlo vacio o con las utilidades de jest como expect toBe => siempre comparando lo que se tiene con la respuesta ideal, la respuesta ideal es simplemente la respuesta construida manualmente por ti

8. Ejecutar lost tests
    ```javascript
        yarn test
        npm test
    ```
9. Agrupar nuestros test con describe

    De igual forma podemos tener uno o mas describe en cada uno de nuestro archivo, pero lo normla es que solamente sea 1 y haga referencia a tu archivo actual y agrupe a todos tus tests
    ```javascript
        describe('Pruebas en <DemoComponent />', () => {
            test1...
            test2...
        })
    ```
10. Instalar React Testing Library
    Jest esta enfocado para hacer aserciones, este paquete de react esta enfocado en lo que sucede en la pantalla después de hacer las interacciones o sea enfocado en interacciones con el DOM, esto no lo tiene jest pero en su documentación te dice que intales el paquete de React Testing Library
    ```javascript
        npm install --save-dev @testing-library/react
    ```

# Posibles errores durante la configuración de jest
    En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."

    Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs

    Para ver mas detalles al respecto pueden ir a https://nodejs.org/docs/latest/api/modules.html#enabling.

# jest.config.js:

    El archivo jest.config.js es un archivo de configuración de Jest que te permite definir y personalizar opciones para la ejecución de pruebas en tu proyecto. En este archivo, puedes especificar rutas de archivos, configuraciones de transformación, patrones de coincidencia de archivos de prueba y más. Jest utiliza esta configuración para saber cómo ejecutar tus pruebas y cómo interactuar con diferentes aspectos de tu proyecto.

    Un ejemplo de configuración básica en jest.config.js podría ser:

    ```javascript
        module.exports = {
            testEnvironment: 'node',
            testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
            transform: {
                '^.+\\.jsx?$': 'babel-jest',
            },
        };
```

# jest.setup.js:

    El archivo jest.setup.js (o alternativamente jest.setup.ts para proyectos TypeScript) es un archivo que Jest ejecuta antes de que se ejecuten las pruebas. Puedes usar este archivo para configurar cualquier estado o funcionalidad que desees que esté presente antes de que comiencen a ejecutarse las pruebas. Por ejemplo, podría ser útil configurar mocks globales, cargar bibliotecas de aserciones personalizadas o realizar configuraciones generales.

    Un ejemplo simple en jest.setup.js podría ser:

    ```javascript
        // Configuración para importar automáticamente el adaptador de aserciones 'chai'
        const chai = require('chai');
        const chaiAsPromised = require('chai-as-promised');

        chai.use(chaiAsPromised);

        // Configuración de un mock global para una API ficticia
        global.fetch = require('node-fetch');
    ```

    NOTA: Ambos archivos, jest.config.js y jest.setup.js, son opcionales y su uso dependerá de las necesidades específicas de tu proyecto y las configuraciones de tus pruebas. Permiten personalizar cómo Jest se comporta y se integra con tu código y tus pruebas, haciendo que el proceso de pruebas sea más flexible y adaptado a tus requerimientos.

# package whatwg-fetch

    El paquete "whatwg-fetch" no es exclusivo de las pruebas con Jest, sino que es una implementación de la interfaz Fetch API según las especificaciones del WhatWG (Web Hypertext Application Technology Working Group). La Fetch API es una interfaz moderna para realizar solicitudes de red y recuperar recursos en la web, como JSON, imágenes, archivos, etc.

    Cuando utilizas "whatwg-fetch" en el contexto de pruebas con Jest (o en cualquier otro lugar en tu código), estás incorporando una implementación del método fetch que te permite realizar solicitudes HTTP y trabajar con las respuestas de manera más conveniente y moderna.

    En el contexto de las pruebas con Jest, "whatwg-fetch" podría ser útil si estás realizando pruebas de componentes o funciones que involucran solicitudes de red. Al usar esta implementación de fetch, puedes simular solicitudes de red y respuestas en tus pruebas sin necesidad de una conexión real a la red. Esto es especialmente útil para realizar pruebas unitarias aisladas sin depender de recursos externos y para asegurarte de que tu código funcione correctamente bajo diferentes condiciones de respuesta.

    Aquí hay un ejemplo de cómo podrías usar "whatwg-fetch" en una prueba Jest para simular una solicitud de red:

    ```javascript
    // Importa "whatwg-fetch" en la parte superior de tu archivo de prueba
    import 'whatwg-fetch';

    // Tu prueba
    test('Ejemplo de solicitud HTTP simulada', async () => {
    // Simula una respuesta ficticia
    fetch.mockResponseOnce(JSON.stringify({ data: 'example' }));

    // Realiza una solicitud HTTP simulada
    const response = await fetch('https://api.example.com/data');

    // Verifica la respuesta simulada
    const data = await response.json();
    expect(data.data).toBe('example');
    });
    ``````
    En este ejemplo, fetch.mockResponseOnce() simula una respuesta de red para la solicitud simulada, lo que te permite probar cómo tu código interactúa con las respuestas HTTP sin depender de una conexión real a la red.

    Recuerda que a partir de Jest 27, Jest tiene su propia implementación global de fetch que proporciona capacidades similares para simular solicitudes de red en las pruebas. Si estás utilizando una versión reciente de Jest, es posible que no necesites "whatwg-fetch" específicamente para las pruebas, ya que Jest proporciona herramientas integradas para simular solicitudes HTTP.