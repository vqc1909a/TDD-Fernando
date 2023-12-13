import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', ()  => {
    test('retornaArreglo debe retonar un string luego un número', () => {
        const [letter, number] = retornaArreglo();

        expect(typeof letter).toBe('string');
        expect(typeof number).toBe('number');

        //or
        expect(letter).toEqual(expect.any( String ));
        expect(number).toEqual(expect.any( Number ));
    })
})