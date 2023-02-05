import React, {useState} from 'react';

import {UserForm, Users} from "../../components";

const UserPage = () => {
    const [userForUpdate, setUserForUpdate] = useState(null);

    return (
        <div>
            <UserForm userForUpdate={userForUpdate} setUserForUpdate={setUserForUpdate}/>
            <hr/>
            <Users setUserForUpdate={setUserForUpdate}/>
        </div>
    );
};

export {UserPage};