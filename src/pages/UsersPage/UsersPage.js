import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {userActions} from "../../redux";
import {User} from "../../components";

const UsersPage = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div>

            <Outlet/>

            {
                users && users.map(user => <User key={user.id} user={user}/>)
            }

        </div>
    );
};

export {UsersPage};