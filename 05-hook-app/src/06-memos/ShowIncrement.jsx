import PropTypes from 'prop-types';
import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {
  console.log("Me volvi a generar")
  return (
    <button
        className="btnn btn-primary"
        onClick={() => increment(5)}
    >
        Incrementar
    </button>
  )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
