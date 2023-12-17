import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retonar "Hola Fernando"', () => {
        const name = "Fernando";
        const message = getSaludo(name);
        //In the console test the expect is that contains the sentence toBe and the received is that contain the sentence expect in this case
        expect(message).toBe(`Hola ${name}`)
    })
})