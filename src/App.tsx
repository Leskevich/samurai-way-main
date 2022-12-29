import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NawBar/NavBar";
import {Route} from "react-router-dom";
import {ContainerDialogs} from "./Components/Dialogs/ContenerDialogs";
import {ContainerUsers} from "./Components/Users/ContainerUsers";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";



type appType = {}

function App({}: appType) {

    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/Profile/:userId'} render={() => <ProfileContainer/>}/>
                <Route path={'/Dialogs'} render={() => <ContainerDialogs/>}/>
                <Route path={'/Users'} render={() => <ContainerUsers/>}/>
            </div>

        </div>
    );
}

export default App;
