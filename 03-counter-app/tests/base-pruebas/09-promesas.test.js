import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-proemsas', () => {
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        const id = 1;

        //jest by default is syncronous, so we need to use the sentence done to tell jest that the test is asyncronous
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
           done();
        })
    })

    test('getHeroeByIdAsync debe de obtener un error si el heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(err => {
            expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        })
    })
    test('getHeroeByIdAsync debe de obtener un héroe o un error', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
           done();
        })
        .catch(err => {
            expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        })
    })
})