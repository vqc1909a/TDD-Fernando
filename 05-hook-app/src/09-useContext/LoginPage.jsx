import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <pre aria-label="pre_login">
          { JSON.stringify(user, null, 3)}
        </pre>

        <button aria-label="button_login" className="btn btn-primary" onClick={() => setUser({id: 123, name: 'Juan', email: 'juan@google.com'})}>Set user</button>
    </>   
  )
}
