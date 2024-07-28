import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Router';
import {BrowserRouter} from "react-router-dom";
import ContextProvider from "./Hook/ContextProvider";

const Index = () => {

    return (
        <React.StrictMode>
            <ContextProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ContextProvider>
        </React.StrictMode>
    );
}

ReactDOM.render(
    <Index/>
  ,
  document.getElementById('app')
);
