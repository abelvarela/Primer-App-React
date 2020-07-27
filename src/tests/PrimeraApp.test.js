import React from 'react';
import "@testing-library/jest-dom";
// import {render} from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = "Hola, Soy Goku";
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();


    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        

        const saludo = "Hola, Soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();


    });



    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola, Soy Goku";
        const subTitulo = "Soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ subTitulo }
                />
        );

        const textoParrafo = wrapper.find("p").text();
        
        expect( textoParrafo ).toBe( subTitulo );


    });
 

})
