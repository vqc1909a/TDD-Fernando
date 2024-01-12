import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// import { CounterApp } from './01-useState/CounterApp.jsx'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-examples'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import "./08-useReducer/intro-reducer";
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  //With the React.StrictMode, we can see in the console the warnings of the React, also we can see the value consoles of the components that will show in the navigator for second or more time, because the React.StrictMode execute the render method two times.
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)

//This BrowserRouter es un HOC (Higher Order Component) because simply get inside it others components
