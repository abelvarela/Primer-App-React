import "@testing-library/jest-dom"

const { getSaludo } = require("../../base/02-template-string");


describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola Abel', () => {
        
        const nombre = "Abel";

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( "Hola " + nombre + "!");

    })



    
    
    test('getSaludo debe retornar Hola Juan! si no hay argumentos', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( "Hola Juan!");

    })




})
