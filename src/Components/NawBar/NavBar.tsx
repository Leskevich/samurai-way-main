import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <div>
                <NavLink to="/Profile/" activeClassName={s.ActiveNavLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" activeClassName={s.ActiveNavLink}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/Users" activeClassName={s.ActiveNavLink}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/News" activeClassName={s.ActiveNavLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" activeClassName={s.ActiveNavLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/Setting" activeClassName={s.ActiveNavLink}>Setting</NavLink>
            </div>
        </nav>
    );
};

