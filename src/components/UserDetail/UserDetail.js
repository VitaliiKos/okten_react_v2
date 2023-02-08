import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";

import {UserPost} from "../UserPost/UserPost";

const UserDetail = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {userPosts} = useSelector(state => state.users);
    const dispatch = useDispatch();

    return (
        <div>
            {
                selectedUser &&
                <div className={'userDetail'}>
                    <h3>{selectedUser.id}</h3>
                    <h3>{selectedUser.name}</h3>
                    <h3>{selectedUser.email}</h3>
                    <button onClick={() => dispatch(userActions.getUserPosts({selectedUser}))}>Show posts
                    </button>
                </div>
            }
            {
                userPosts &&
                <>
                    <button onClick={() => dispatch(userActions.clearPosts())}>X</button>
                    {userPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
                </>
            }
        </div>
    );
};

export {UserDetail};