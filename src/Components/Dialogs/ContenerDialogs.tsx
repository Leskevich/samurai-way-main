import React from 'react';
import {Dialogs} from "./Dialogs";
import {addNewMessageAC, newTextMessageAC} from "../../Redux/DialogPage-Reducer";
import {store} from "../../Redux/Redux-Store";

export const ContainerDialogs = () => {
const state = store.getState().dialogPage
    const newTextMessage = (text:string) =>{
        store.dispatch(newTextMessageAC(text))
    }
    const addNewMessage=()=>{
        store.dispatch(addNewMessageAC())
    }
    return (
        <div>
            <Dialogs
                newTextMessage={newTextMessage}
                addNewMessage={addNewMessage}
                newMessageBody={state.newMessageBody}
                message={state.message}
                dialog={state.dialog}
            />
        </div>
    );
};

