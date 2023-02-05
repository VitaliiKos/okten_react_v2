import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.menu}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};