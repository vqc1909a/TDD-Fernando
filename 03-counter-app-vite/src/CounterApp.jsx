import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );

    const addHandler = () => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const substractHandler = () => setCounter( counter - 1 );
    const resetHandler = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ addHandler }> +1 </button>
            <button onClick={ substractHandler }> -1 </button>
            <button aria-label="btn-reset" onClick={ resetHandler }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


