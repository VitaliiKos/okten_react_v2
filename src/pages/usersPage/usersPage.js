import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../../components/user/user";
import {UserDetail} from "../../components/userDetail/userDetail";

const UsersPage = () => {
    const [users, setUsers] = useState ([]);
    let [userDetail, setUserDetail] = useState();

    useEffect(() => {
        userService.getUsers().then(value => {
            setUsers(value)
        })
    }, []);

    const detail = (id) => {
        userService.getUserById(id).then(value => {
            setUserDetail(value)
            console.log(value)
        })
    }

    return (
        <div>
            {
                users && users.map(user => < User key={user.id} user={user} detail={detail}/>)
            }

            {
                userDetail &&  < UserDetail  key= {userDetail['id']} userInfo={userDetail}/>
            }

        </div>
    );
};

export {UsersPage};