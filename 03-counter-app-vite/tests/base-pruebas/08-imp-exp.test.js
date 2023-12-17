import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.js', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        expect(hero).toBeTruthy();
    })
    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 20;
        const hero = getHeroeById(id);
        // expect(hero).toBe(undefined)
        //or => toBeFalsy(): te evalua si retorna null, undefined o false
        expect(hero).toBeFalsy();
    })
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        const heroesDCExpect = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        expect(heroesDC).toEqual(heroesDCExpect)
        expect(heroesDC.length).toBe(heroesDCExpect.length)
    })
    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);
        const heroesMarvelExpect = [
          { id: 2, name: 'Spiderman', owner: 'Marvel' },
          { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]
        expect(heroesMarvel).toEqual(heroesMarvelExpect)
        expect(heroesMarvel.length).toBe(heroesMarvelExpect.length)
    })

})