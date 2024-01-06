import PropTypes from "prop-types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export const QuoteLayoutEffect = ({author, quote}) => {
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });
  const pRef = useRef();

  //useLayoutEffect is similar to useEffect, but the difference is that the useLayoutEffect is executed before the render of the component, so if we want to do something before the render of the component, we can use the useLayoutEffect, but the useLayoutEffect is not very common to use, so we can use the useEffect instead of useLayoutEffect
  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({
      height,
      width
    })
  }, [])

  useEffect(() => {
    console.log({
      useLayout: pRef.current.getBoundingClientRect()
    });
  }, [])

  return (
    <>
      <blockquote className="blockquote text-end" style={{display: "flex"}}>
          <p className="mb-1" ref={pRef}>{quote}</p>
          <footer className="blockquote-footer"> {author}</footer>
      </blockquote>
      
      <code>{ JSON.stringify(boxSize)}</code>
    </>
  )
}

QuoteLayoutEffect.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}
