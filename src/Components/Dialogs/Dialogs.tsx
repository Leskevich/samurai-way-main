import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogNameType = {
    name: string
    id: string
}
type DialogMessage = {
    message: string
}
const DialogName = ({name, id}: DialogNameType) => {
    const pathLink = '/Dialogs/' + id
    return (
        <>
            <NavLink to={pathLink}>{name}</NavLink>
        </>
    )
}
const DialogMessage = ({message}:DialogMessage) => {
return(
    <>
        <div className={s.message}>{message}</div>
    </>
)
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsName}>
                <div className={s.name + ' ' + s.active}>
                    <DialogName name={'roma'} id={'1'}/>
                </div>
                <div className={s.name}>
                    <DialogName name={'vadim'} id={'2'}/>
                </div>
                <div className={s.name}>
                    <DialogName name={'anton'} id={'3'}/>
                </div>
                <div className={s.name}>
                    <DialogName name={'andrei'} id={'4'}/>
                </div>
            </div>
            <div className={s.dialogMessage}>
                <DialogMessage message={'hi'}/>
                <DialogMessage message={'ho'}/>
                <DialogMessage message={'ky'}/>
                <DialogMessage message={'vai'}/>
            </div>
        </div>
    );
};

