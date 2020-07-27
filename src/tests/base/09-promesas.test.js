import "@testing-library/jest-dom"
import heroes from "../../data/heroes";
const { getHeroeByIdAsync } = require("../../base/09-promesas");



describe('Pruebas con promesas', () => {
    
    
    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {
        
        const id = 1;
        
        getHeroeByIdAsync( id ).then( heroe => {

            expect( heroe ).toBe( heroes[0] );
            done();

        });


        
        
    });
    
    
    test('Debe obtener un error si el héroe por id no existe', (done) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe( "No se pudo encontrar el héroe" );
                done();
            } )

    });

})
