import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        {/* <CounterApp value={ 20 } /> */}
        {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    </React.StrictMode>
);


