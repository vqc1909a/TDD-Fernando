import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //With the React.StrictMode, we can see in the console the warnings of the React, also we can see the value consoles of the components that will show in the navigator for second or more time, because the React.StrictMode execute the render method two times.
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
)
