import React from 'react';

import {userActions} from "../../reducers/userReducer";
import {useAppReducer} from "../../hooks/useAppReducer";
import css from './user.module.css';

const User = ({user}) => {

    const [, dispatch] = useAppReducer(value => value.userReducer);
    const {id, name, surname, age} = user;

    return (
        <div className={css.userCard}>
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>surname: {surname}</h4>
            <h4>age: {age}</h4>
            <div className={css.userButton}>
                <button onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
                <button onClick={() => dispatch(userActions.USER_FOR_UPDATE(user))}>Update</button>
            </div>
        </div>
    );
};

export {User};