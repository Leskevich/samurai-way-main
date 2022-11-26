import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NawBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {ContainerDialogs} from "./Components/Dialogs/ContenerDialogs";


type appType = {

}

function App({}: appType) {
    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/Profile'} render={() => <Profile/>}/>
                <Route path={'/Dialogs'} render={() => <ContainerDialogs/>}/>
            </div>

        </div>
    );
}

export default App;
