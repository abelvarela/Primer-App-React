import "@testing-library/jest-dom";
const { getImagen } = require("../../base/11-async-await")

describe('Pruebas con async-await y fetch', () => {
    
    test('Debe retornar el url de la imagen', async() => {
        
        const url = await getImagen();


        // expect( typeof url ).toBe( "string" );
        expect( url.includes("http") ).toBe( true );


    })
    


})
