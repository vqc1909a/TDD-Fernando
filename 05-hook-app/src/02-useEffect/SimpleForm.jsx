import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'vqc1909a',
        email: 'vqc1909a@gmail.com'
    })
    const { username, email } = formState

    const handleInputChange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //If the useEffect not has a dependency, the useEffect only execute one time, when the component is renderized.
    //If the useEffect has a dependency, the useEffect execute when the dependency change.
    //If the useEffect not has argument dependecies, the useEffect execute each time when the component is renderized and when the component is unmount. 

    //The recommended by React is that the useEffect only made one thing, and not many things. It don't care if we have a lot of useEffect or the useEffect has many dependencies 
    useEffect(() => {
        // console.log("useEffect called!")   
    }, [])
    
    useEffect(() => {
        // console.log("formState changed!")   
    }, [formState])
    
    useEffect(() => {
        // console.log("email changed!")   
    }, [email])
    
    return (
    <>
        <h1>Formulario Simple</h1>
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
        
        {
            username === 'vqc1909a2' && <Message />
        }
    </>
  )
}
