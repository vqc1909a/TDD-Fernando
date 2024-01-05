import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    //There is a package called react-hook-form that is seemed to this hook useForm but with steroides
    const { username, email, password , handleInputChange, handleResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });
    return (
    <>
        <h1>Formulario con custom hook</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder='Username'
            name="username"
            value={username}
            onChange={handleInputChange}
        ></input>

        <input 
            type="email"
            className="form-control mt-2"
            placeholder='vqc1909a@gmail.com'
            name="email"
            value={email}
            onChange={handleInputChange}
        ></input>

        <input 
            type="password"
            className="form-control mt-2"
            placeholder='Contraseña'
            name="password"
            value={password}
            onChange={handleInputChange}
        ></input>
        
        <button onClick={handleResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
