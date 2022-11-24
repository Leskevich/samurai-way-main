import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NawBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionType, stateType} from "./Redux/State";


type appType = {
    state: stateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: appType) {

    return (
        <div className="App-Wrapper">
            <Header/>
            <NavBar/>
            <div className='App-Wrapper-Content'>
                <Route path={'/Profile'} render={() => <Profile
                    state={state.profilePage}
                    dispatch={dispatch}
                />}/>
                <Route path={'/Dialogs'} render={() => <Dialogs
                    state={state.dialogPage}
                    dispatch={dispatch}
                />}/>
            </div>

        </div>
    );
}

export default App;
