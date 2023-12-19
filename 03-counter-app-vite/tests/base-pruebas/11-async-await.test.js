import { getImageAsyncAwait, getImageAsyncAwaitError } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', ()  => {

    test('getImageAsyncAwait debe de retornar una URL de la imagen', async () => {
        //if we use versions below 18, probably we need to set additional configures in the file jest.config.js because not recognized me the sentence fetch in versions below 18 to the execute the tests, otherwise is not neccesary to configure nothing
        const url = await getImageAsyncAwait();
        // {
        // url: 'https://media0.giphy.com/media/ZeRvTk83a4zsc4dutf/giphy.gif?cid=60f8d0e8j6nkd1tgg3zwuhehubkaa0qbwqr5yzm6ap80wt19&ep=v1_gifs_random&rid=giphy.gif&ct=g'
        // }
        expect(typeof url).toBe('string');    
        expect(url).toEqual(expect.any(String));
        expect(url).toStrictEqual(expect.any(String));    
    })

    test('getImageAsyncAwait debe de retornar un error', async () => {
        const urlError = await getImageAsyncAwaitError();
        expect(urlError).toBe("No se encontro la imagen");
    })
})