import React from 'react';
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <div>Profile</div>
            <div>Message</div>
            <div>News</div>
            <div>Music</div>
            <div>Setting</div>
        </nav>
    );
};

