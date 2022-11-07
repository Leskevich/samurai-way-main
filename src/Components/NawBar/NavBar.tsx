import React from 'react';
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <div>
                <a href="/Profile">Profile</a>
            </div>
            <div>
                <a href="/Dialogs">Dialogs</a>
            </div>
            <div>
                <a href="/News">News</a>
            </div>
            <div>
                <a href="/Music">Music</a>
            </div>
            <div>
                <a href="/Setting">Setting</a>
            </div>
        </nav>
    );
};

