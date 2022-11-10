import React from 'react';
import s from './Dialogs.module.css'
import {DialogName} from "./DialogName/DialogName";
import {DialogMessage} from "./DialogMassage/DialogMessage";
import {dialogPageType, stateDialogType, stateMessageType} from "../../Redux/State";


type dialogType = {
    state: dialogPageType
}
export const Dialogs = ({state}: dialogType) => {
    const dialogMessageMap = state.message
        .map((el: stateMessageType) => <DialogMessage key={el.id} message={el.message} id={el.id}/>)
    const dialogNameMap = state.dialog.map((el: stateDialogType) => {
        return (
            <div className={s.name + ' ' + s.active}>
                <DialogName key={el.id} name={el.name} id={el.id}/>
            </div>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsName}>
                {dialogNameMap}
            </div>
            <div className={s.dialogMessage}>
                {dialogMessageMap}
            </div>
        </div>
    );
};

