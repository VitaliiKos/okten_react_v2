import React from 'react';

import {User} from "../User/User";
import {useAppReducer} from "../../hooks/useAppReducer";
import css from './users.module.css';

const Users = () => {
    const [{users}] = useAppReducer((reducers) => reducers.userReducer);
    return (
        <div className={css.usersList}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};