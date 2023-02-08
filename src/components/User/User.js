import React from 'react';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name, username, phone, email} = user;
    const dispatch = useDispatch();

    return (
        <div className={'userCard'}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{phone}</h3>
            <h3>{email}</h3>
            <NavLink to={id.toString()} onClick={() => dispatch(userActions.getById({id}))}>More detail
                response</NavLink>
        </div>
    );
};

export {User};