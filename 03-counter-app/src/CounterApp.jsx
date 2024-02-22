import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState( value );

    const handleAdd = (event, name) => { 
        console.log({event, name})
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    };

    const handleSubstract = (event) => counter === 0  ? setCounter(0) : setCounter( counter - 1 );

    const handleReset = (event) => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ (e) => handleAdd(e, "Goku") }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}   

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


