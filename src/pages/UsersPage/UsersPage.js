import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {userActions} from "../../redux";
import {User} from "../../components";
import css from './userPage.module.css';

const UsersPage = () => {
    const dispatch = useDispatch();
    const {users, selectedUser} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch, selectedUser]);

    return (
        <div className={css.wrapper}>
            <Outlet/>
            <div className={css.userListBlock}>
                {
                    users && users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export {UsersPage};