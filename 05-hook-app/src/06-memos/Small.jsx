import PropTypes from "prop-types";
import React from "react";

//This component will be rendered by the change not only of the counter, also by other values that are changing in the father component, so if only there is a important deprecation in the rendering you component we should use the sentence memo
export const Small = React.memo(({counter}) => {
  console.log("Me volvía a dibujar")
  return (
    <small>{ counter }</small>
  )
})

Small.propTypes = {
    counter: PropTypes.number.isRequired
}


