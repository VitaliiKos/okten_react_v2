import React from 'react';
import {User} from "../User/User";
import {useAppReducer} from "../../hooks/useAppReducer";

const Users = ({setUserForUpdate}) => {
    const [users] = useAppReducer((reducers)=>reducers.userReducer);

    return (
        <div>
            Users
            {users && users.map(user=> <User key={user.id} user={user} setUserForUpdate={setUserForUpdate}/>)}
        </div>
    );
};

export {Users};