import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {value = 0} ) => {


    // Hook
    // const state = useState("Goku");
    // const [nombre, setNombre] = useState("Goku");
    // console.log(nombre, setNombre);
    
    const [ counter, setCounter ] = useState( value ); // devuelve arreglo []
    


    // handleAdd
    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 ); // función cuyo resultado es el valor q seteo,  "c" es el valor actual de counter.
    }

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            {/* <button onClick={ (e) => { handleAdd(e) } }>+1</button> */}
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubstract  } >-1</button>
        </>
    );



}


CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}




export default CounterApp;