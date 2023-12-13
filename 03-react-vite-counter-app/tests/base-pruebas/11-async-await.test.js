import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', ()  => {
    test('getImagen debe de retornar un URL de la imagen', async () => {
        //No ponemos try catch porque ante algun error aqui mismo me devuelve el mensaje del catch
        const url = await getImagen();
        console.log({
            url
        })
        expect(typeof url).toBe('string');        
    })
})