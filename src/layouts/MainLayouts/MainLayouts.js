import React from 'react';
import {Outlet} from "react-router-dom";

import css from './mainLayouts.module.css';
import {Header} from "../../components";

const MainLayouts = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.menu}>
                <Header/>
            </div>

            <div className={css.content}>
                <Outlet/>
            </div>

            {/*<div className={css.footer}>*/}
            {/*    <h3> Lesson 4</h3>*/}
            {/*</div>*/}

        </div>);
};

export {MainLayouts};