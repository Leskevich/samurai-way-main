import React from 'react';
import './index.css';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/Redux-Store";

export const RenderThee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderThee()
store.subscribe(RenderThee)