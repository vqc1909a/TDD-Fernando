import PropTypes from 'prop-types';


const getResult = () => (
  <>
    <h1>Subtitle</h1>
  </>
)

export const FirstApp = ({ title, subTitle, name }) => {
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
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'No hay nombre',
  subTitle: 'No hay subtítulo',
}
