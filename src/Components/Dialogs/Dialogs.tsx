import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogName} from "./DialogName/DialogName";
import {DialogMessage} from "./DialogMassage/DialogMessage";
import {
    ActionType,

    dialogPageType,

    stateDialogType,
    stateMessageType
} from "../../Redux/State";
import {addNewMessageAC, newTextMessageAC} from "../../Redux/DialogPage-Reducer";


type dialogType = {
    state: dialogPageType
    dispatch:(action:ActionType)=>void
}
export const Dialogs = ({state,dispatch}: dialogType) => {
    const dialogMessageMap = state.message.map((el: stateMessageType) => <DialogMessage key={el.id} message={el.message}
                                                                                        id={el.id}/>)
    const dialogNameMap = state.dialog.map((el: stateDialogType) => {
        return (
            <div key={el.id} className={s.name + ' ' + s.active}>
                <DialogName name={el.name} id={el.id}/>
            </div>
        )
    })
    const netTextMessage = React.createRef<HTMLTextAreaElement>()
    const newMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        dispatch(newTextMessageAC(e.currentTarget.value))
    }
    const addNewMessage=()=>{
        dispatch(addNewMessageAC())
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsName}>
                    {dialogNameMap}
                </div>
                <div className={s.dialogMessage}>
                    {dialogMessageMap}
                </div>

            </div>
            <div>
                <div>
                    <textarea ref={netTextMessage}
                              value={state.newMessageBody}
                              onChange={newMessageHandler}
                    />
                </div>

                <button onClick={addNewMessage}>+</button>
            </div>

        </div>
    );
};

