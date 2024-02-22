import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* if you not assign a value to some property, the property's value by default is true  */}
        {/* <FirstApp title="Hola, Soy Vegeta" subTitle="Hola, Soy el subtitulo" /> */}
        <CounterApp value={ 20 } />
        {/* <HelloWorldApp /> */}

    </React.StrictMode>
);


