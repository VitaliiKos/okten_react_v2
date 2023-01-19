import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";
import {Posts} from "../Posts/Posts";
import {Comments} from "../Comments/Comments";
import './users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState(null);
    const [postComments, setPostComments] = useState(null);

    useEffect(() => {
        userService.getUsers().then(value => {
            setUsers(value)
        })
    }, []);

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
            <div className={'usersList'}>

                {
                    <>
                        {/*<div className={'title'}>*/}
                            {/*<h2>Users</h2>*/}
                        {/*</div>*/}
                        {
                            users.map(user => <User key={user.id} user={user} getPosts={getPosts}/>)
                        }
                    </>
                }
            </div>
            <div className={'postsList'}>
                {
                    userPosts &&
                    <>
                        {/*<div className={'title'}>*/}
                            {/*<h2>Posts</h2>*/}
                        {/*</div>*/}
                        {
                            userPosts.map(userPost => <Posts key={userPost.id} userPost={userPost}
                                                             getComments={getComments}/>)
                        }
                    </>

                }
            </div>

            <div className={'commentsBlock'}>
                {
                    postComments &&
                    <>
                        <div className={'title'}>
                            <h2>Comments</h2>
                        </div>
                        {postComments.map(comment => <Comments key={comment.id} comment={comment}/>)}
                    </>
                }
            </div>

        </div>
    );
};

export {Users};