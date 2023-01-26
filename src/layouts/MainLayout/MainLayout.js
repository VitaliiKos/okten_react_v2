import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";
import css from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.menu}>
                <Header/>
            </div>

            <div className={css.content}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                <h3> Lesson 4</h3>
            </div>

        </div>
    );
};

export {MainLayout};