import React from 'react';

import {userActions} from "../../reducers/userReducer";
import {useAppReducer} from "../../hooks/useAppReducer";

const User = ({user, setUserForUpdate}) => {
    const [, dispatch] = useAppReducer(value => value.userReducer);
    const {id, name, surname, age} = user;

    return (
        <div>
            User
            <h4>id: {id}</h4>
            <h4>name: {name}</h4>
            <h4>surname: {surname}</h4>
            <h4>age: {age}</h4>
            <button onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
            <button onClick={() => setUserForUpdate(user)}>Update</button>
        </div>
    );
};

export {User};