import React from 'react';
import {NavLink} from "react-router-dom";

import {RouterEndpoints} from "../../routes";
import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.menu}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={RouterEndpoints.login}>Login</NavLink>
            <NavLink to={RouterEndpoints.register}>Register</NavLink>
            {/*<NavLink to={RouterEndpoints.cars}>Cars</NavLink>*/}
        </div>
    );
};

export {Header};