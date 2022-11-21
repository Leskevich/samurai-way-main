import React from 'react';
import './index.css';
import { store} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const RenderThee = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPost={store.updateNewPost.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RenderThee()
store.subscribe(RenderThee)