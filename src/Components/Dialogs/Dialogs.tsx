import React from 'react';
import s from './Dialogs.module.css'
import {DialogName} from "./DialogName/DialogName";
import {DialogMessage} from "./DialogMassage/DialogMessage";


type DialogNameDataType = {
    name: string
    id: number
}
type DialogMessageDataTape = {
    message: string
    id: number
}

const dialogNameData: DialogNameDataType[] = [
    {name: 'roma', id: 1},
    {name: 'vadim', id: 2},
    {name: 'anton', id: 3},
    {name: 'andrei', id: 4},
]
const messageNameData: DialogMessageDataTape[] = [
    {message: 'hi', id: 1},
    {message: 'ho', id: 2},
    {message: 'ky', id: 3},
    {message: 'vai', id: 4},
]
const dialogMessageMap = messageNameData.map((el: DialogMessageDataTape) => <DialogMessage message={el.message}
                                                                                           id={el.id}/>)
const dialogNameMap = dialogNameData.map((el: DialogNameDataType) => {
    return (
        <div className={s.name + ' ' + s.active}>
            <DialogName name={el.name} id={el.id}/>
        </div>
    )
})
export const Dialogs = () => {
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

