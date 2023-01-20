import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";
import {UserDetail} from "../UserDetail/UserDetail";
import {Posts} from "../Posts/Posts";
import {Comments} from "../Comments/Comments";
import './users.css'

const Users = () => {
    const [users, setUsers] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userPosts, setUserPosts] = useState(null);
    const [postComments, setPostComments] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(value)
        })
    }, []);

    const detail = (userID) => {
        setUserId(userID)
    }


    const getPosts = (userId) => {
        userService.getPosts(userId).then(value => {
            setUserPosts(value)
        })
    }

    const getComments = (postId) => {
        userService.getComments(postId).then(value => {
            setPostComments(value)
        })
    }


    return (
        <div className={'wrap'}>

            <div className={'user'}>
                <div className={'usersList'}>
                    {
                        users && users.map(user => < User key={user.id} user={user} detail={detail}/>)
                    }
                </div>

                <div className={'userDetail'}>
                    {
                        userId && < UserDetail userId={userId} getPosts={getPosts}/>
                    }
                </div>
            </div>


            <div className={'postsList'}>
                {
                    userPosts && userPosts.map(userPost => <Posts key={userPost.id} userPost={userPost}
                                                                  getComments={getComments}/>)
                }
            </div>

            <div className={'commentsBlock'}>
                {
                    postComments &&
                    postComments.map(comment => <Comments key={comment.id} comment={comment}/>)
                }
            </div>

        </div>
    );
};

export {Users};