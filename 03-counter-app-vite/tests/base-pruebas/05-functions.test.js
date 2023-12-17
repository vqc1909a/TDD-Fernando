import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-functions';


describe('Pruebas en 05-functions.js', () => {

    test('getUser debe de retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };    
        const user = getUser();
    
        //Use toEqual to compare objects or arrays and check that they have the same value.
        expect(user).toEqual(testUser);
        expect(user).toEqual({
            ...testUser,
            surname: undefined
        });
    });


    test('getUsuarioActivo debe de retornar un objeto con un nombre dinámico', () => {
        
        const name = 'Fernando';
        const user = getUsuarioActivo( name );
        
        //Use toStrictEqual to compare primitive values or to check referential identity of object instances for example:
        // class LaCroix {
        //     constructor(flavor) {
        //         this.flavor = flavor;
        //     }
        // }

        // describe('the La Croix cans on my desk', () => {
        //     test('are not semantically the same', () => {
        //         expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
        //         expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
        //     });
        // });
        expect( user ).not.toStrictEqual({
            uid: 'ABC567',
            username: name,
            surname: undefined
        });

    });

});
