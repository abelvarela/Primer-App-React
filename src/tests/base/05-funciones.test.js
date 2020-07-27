import "@testing-library/jest-dom";

const { getUser, getUsuarioActivo } = require("../../base/05-funciones")


describe('Pruebas en 05-funciones', () => {



    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: "ABC123",
            username: "El_abel"
        } 


        const user = getUser();

        expect( user ).toStrictEqual( userTest );

    })
    
    


    test('getUserActivo debe retornar un objeto', () => {
        
        const nombre = "Abel";


        const userActivoTest = {
            uid: "ABC567",
            username: nombre
        } 


        const userActivo = getUsuarioActivo( nombre );

        expect( userActivo ).toStrictEqual( userActivoTest );

    })



})
