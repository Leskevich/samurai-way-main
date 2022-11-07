import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsName}>
                <div className={s.name + ' ' + s.active}>
                    <NavLink to={'/Dialogs/1'}>roma</NavLink>
                </div>
                <div className={s.name}>
                    <NavLink to={'/Dialogs/2'}>vadim</NavLink>
                </div>
                <div className={s.name}>
                    <NavLink to={'/Dialogs/3'}>anton</NavLink>
                </div>
                <div className={s.name}>
                    <NavLink to={'/Dialogs/4'}>andrei</NavLink>
                </div>
            </div>
            <div className={s.dialogMessage}>
                <div className={s.message}>hello1</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>hello</div>
            </div>
        </div>
    );
};

