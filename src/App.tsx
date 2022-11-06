import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {NavBar} from "./Components/NavBar";
import {Profile} from "./Components/Profile";

function App() {
    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
