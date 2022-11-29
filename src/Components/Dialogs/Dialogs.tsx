import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogName} from "./DialogName/DialogName";
import {DialogMessage} from "./DialogMassage/DialogMessage";
import {stateDialogType, stateMessageType} from "../../Redux/State";
import {DialogsContainerType} from "./ContenerDialogs";



export const Dialogs = ({message,dialog,newMessageBody,...props}: DialogsContainerType) => {
    const dialogMessageMap = message.map((el: stateMessageType) => <DialogMessage key={el.id} message={el.message}
                                                                                        id={el.id}/>)
    const dialogNameMap = dialog.map((el: stateDialogType) => {
        return (
            <div key={el.id} className={s.name + ' ' + s.active}>
                <DialogName name={el.name} id={el.id}/>
            </div>
        )
    })
    const netTextMessage = React.createRef<HTMLTextAreaElement>()
    const newMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        props.newTextMessage(e.currentTarget.value)
    }
    const addNewMessage=()=>{
        props.addNewMessage()
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
                              value={newMessageBody}
                              onChange={newMessageHandler}
                    />
                </div>

                <button onClick={addNewMessage}>+</button>
            </div>

        </div>
    );
};

