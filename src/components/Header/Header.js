import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';
import {RouterEndpoints} from "../../routes";

const Header = () => {
    return (
        <div className={css.menu}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={RouterEndpoints.users}>Users</NavLink>
            <NavLink to={RouterEndpoints.posts}>Posts</NavLink>
            <NavLink to={RouterEndpoints.cars}>Cars</NavLink>
        </div>
    );
};

export {Header};