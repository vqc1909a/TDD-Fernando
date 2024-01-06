import { useRef } from "react";

export const FocusScreen = () => {

  const inputRef = useRef();
  const handleClickFocus = () => {
    //The document is only all html that is present in the navigator in live, so we can use the querySelector to select the element that we want, in this case, the input element, and then we can use the method focus to set the focus in the input element.

    //If the tag html is not present in the html in the navigator, the sintaxis document will not catch the tag html
    // document.querySelector("input").select();
    inputRef.current.select();
  }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
            ref={inputRef}
        />

        <button className="btn btn-primary mt-2" onClick={handleClickFocus}>
            Set Focus
        </button>
    </>
    )
}
