import { getGif } from "../../src/helpers/getGifs";



describe('Pruebas sobre la función getGifs', (() => {
    test('Debe retornar un array de gifs', async () => {
        const gifs = await getGif('One Piece');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
}));