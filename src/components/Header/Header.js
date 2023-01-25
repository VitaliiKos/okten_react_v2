import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./header.module.css";

const Header = () => {
    return (<>
            <div className={css.menu}>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={'todos'}>Todos</NavLink>
                <NavLink to={'albums'}>Albums</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </div>

            <div className={css.content}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                <h3> Lesson 4</h3>
            </div>
        </>);
};

export {Header};