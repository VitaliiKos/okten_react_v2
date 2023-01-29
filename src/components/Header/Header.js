import React from 'react';

import css from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.menu}>
            <NavLink to="">Home</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <NavLink to="animals">Animals</NavLink>
        </div>
    );
};

export {Header};