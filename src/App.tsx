import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NawBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/Profile'} render={() => <Profile/>}/>
                <Route path={'/Dialogs'} render={() => <Dialogs/>}/>
            </div>

        </div>
    );
}

export default App;
