import React from 'react';
import "@testing-library/jest-dom";
// import {render} from "@testing-library/react";
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';


describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        
        wrapper = shallow( <CounterApp /> );

    });
    

    
    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });



    test('Debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } /> );

        const textoH2 = wrapper.find("h2").text().trim();
        
        expect( textoH2 ).toBe( "100" );


    });
    
    

    test('Debe incrementar con el boton +1', () => {
        
        wrapper.find("button").at(0).simulate("click");

        const textoH2 = wrapper.find("h2").text().trim();

        expect( textoH2 ).toBe("11");
        
    });
    
    
    
    test('Debe decrementar con el boton -1', () => {
        
        wrapper.find("button").at(2).simulate("click");
        
        const textoH2 = wrapper.find("h2").text().trim();
        
        expect( textoH2 ).toBe("9");
        
    });
    
    

    test('Debe resetear con el boton reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 } /> );

        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");

        const textoH2 = wrapper.find("h2").text().trim();

        expect( textoH2 ).toBe("105");
        
    });
 

})
