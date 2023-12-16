import PropTypes from 'prop-types';


const getResult = () => (
  <>
    <h1>Subtitle</h1>
  </>
)

export const FirstApp = ({ title, subTitle, name, number }) => {
  const newMessage = {
    message: "Hola Mundo",
    title: "Fernando"
  }

  return (
    //If the father tag makes no sense in the DOM tree, then just put etiquetes empty as the next example below
    <>
      <h1 data-testid="test-title">{ title }</h1>
      {/* <pre>
        <code>{ JSON.stringify(newMessage, null, 2) }</code>
      </pre>    */}
      {/* <h2>{getResult()}</h2> */}
      <h3>Number: {number + 2}</h3>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

//These values default are assigned to properties before its be validated with propTypes
FirstApp.defaultProps = {
  name: 'No hay nombre',
  number: 0,
}

//if you are working with vite you need to install the package prop-types, otherwise if you are working with create-react-app, is not necessary install prop-types, as that it comes installed by default 
FirstApp.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

