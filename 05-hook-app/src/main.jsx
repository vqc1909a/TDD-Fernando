import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
