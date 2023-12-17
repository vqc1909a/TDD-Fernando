import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', ()  => {
    test('retornaArreglo debe retonar un string y un número', () => {
        const [letter, number] = retornaArreglo();

        expect(typeof letter).toBe('string');
        expect(typeof number).toBe('number');

        //or

        //In this case toEqual is used to compare object types whithout mind the value 
        expect(letter).toEqual(expect.any( String ));
        expect(number).toEqual(expect.any( Number ));

        //or
        //Normally toStrictEqual is used to compare object types and their values, but in this case its only compare the object types that equal toEqual

        //expect.any(constructor) matches anything that was created with the given constructor. You can use it inside toEqual or toBeCalledWith instead of a literal value.
        expect(letter).toStrictEqual(expect.any( String ));
        expect(number).toStrictEqual(expect.any( Number ));
    })
})