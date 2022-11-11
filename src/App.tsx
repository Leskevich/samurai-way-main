import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NawBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {stateType} from "./Redux/State";


type appType = {
    state: stateType
    addPost: (text:string) => void
}

function App({state, addPost}: appType) {

    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/Profile'} render={() => <Profile
                    state={state.profilePage}
                    addPost={(text:string)=>addPost(text)}
                />}/>
                <Route path={'/Dialogs'} render={() => <Dialogs state={state.dialogPage}/>}/>
            </div>

        </div>
    );
}

export default App;
