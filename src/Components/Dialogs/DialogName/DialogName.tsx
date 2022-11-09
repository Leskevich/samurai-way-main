import React from 'react';
import {NavLink} from "react-router-dom";

type DialogNameType = {
    name: string
    id: number
}

export const DialogName =({name, id}: DialogNameType) => {
    const pathLink = '/Dialogs/' + id
    return (
        <>
            <NavLink to={pathLink}>{name}</NavLink>
        </>
    )
};

