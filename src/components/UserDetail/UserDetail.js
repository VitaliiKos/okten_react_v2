import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {useNavigate, useParams} from "react-router-dom";

import {UserPost} from "../UserPost/UserPost";
import {RouterEndpoints} from "../../routes";
import css from './userDetail.module.css';

const UserDetail = () => {
    const {selectedUser, userPosts} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userActions.getById({id}))
        dispatch(userActions.getUserPosts({id}))
    }, [dispatch, id])

    return (
        <>
            {id &&
                <div className={css.userDetail}>
                    <div className={css.userInfo}>
                        <div className={css.buttonInfo}>
                            <button onClick={() => {
                                navigate(`/${RouterEndpoints.users}`)
                                dispatch(userActions.setSelectedUser(null))
                            }}>X
                            </button>
                        </div>
                        {
                            selectedUser &&
                            <div className={css.userDescription}>
                                <h3>Id: {selectedUser.id}</h3>
                                <h3>Name: {selectedUser.name}</h3>
                                <h3>Username: {selectedUser.username}</h3>
                                <h3>Phone: {selectedUser.phone}</h3>
                                <h3>Website: {selectedUser.website}</h3>
                                <h3>Address: </h3>

                                <div>
                                    <h3>{selectedUser.address.city}</h3>
                                    <h3>{selectedUser.address.street}</h3>
                                    <h3>{selectedUser.address.suite}</h3>
                                    <h3>{selectedUser.address.zipcode}</h3>
                                    <h3>Geo: </h3>
                                    <div>
                                        <h3>{selectedUser.address.geo.lat}</h3>
                                        <h3>{selectedUser.address.geo.lng}</h3>
                                    </div>
                                </div>
                                <h3>Company: </h3>
                                <div>
                                    <h3>Company Name: {selectedUser.company.name}</h3>
                                    <h3>CatchPhrase: {selectedUser.company.catchPhrase}</h3>
                                    <h3>Bs: {selectedUser.company.bs}</h3>
                                </div>

                            </div>
                        }
                        {
                            userPosts &&
                            <div className={css.userPostsList}>
                                {userPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export {UserDetail};
