import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsName}>
                <div className={s.name + ' ' + s.active}>roma</div>
                <div className={s.name}>vadim</div>
                <div className={s.name}>anton</div>
                <div className={s.name}>andrei</div>
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

