import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser debe de retornar un objecto', () => {
        
        const userExpect = {
            uid: 'ABC123',
            username: '5'
        };    
        const user = getUser();
    
        //Usamo toEqual para revisar contenido y no posición de memoria
        expect(user).toEqual(userExpect);
    });


    test('getUsuarioActivo debe de retornar un objeto con un nombre dinámico', () => {
        
        const name = 'Fernando';
        const user = getUsuarioActivo( name );
        
        //toStrictEqual es la misma vaina que toEqual
        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});
