import React from 'react';
import './index.css';

import {addPost, state, stateType, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const RenderThee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderThee()
subscribe(RenderThee)