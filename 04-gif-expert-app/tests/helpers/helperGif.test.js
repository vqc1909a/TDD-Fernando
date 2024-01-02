import { getGifsByCategory } from "../../src/helpers/helperGif"

describe('tests on helper helperGif', () => { 
    test('should get array gifs', async () => { 
        const gifs = await getGifsByCategory('One Punch');

        //let's not evalue the content of the array, just that it is greater than 0, but the content could be vary in the future
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
})