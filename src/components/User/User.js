import React from 'react';
import {NavLink} from "react-router-dom";

import css from './user.module.css';

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <NavLink to={id.toString()} className={css.userItem}>
            <div className={css.userCard}>
                <div className={css.card_title}>
                    <h3>{id}</h3>
                    <h3>{name}</h3>
                    <h3>{username}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export {User};