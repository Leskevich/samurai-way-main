import React from 'react';
import s from "./DialogMessage.module.css";

type DialogMessagePropsType = {
    message: string
    id: number
}
export const DialogMessage = ({message}: DialogMessagePropsType) => {
    return (
        <>
            <div className={s.message}>{message}</div>
        </>
    )
}