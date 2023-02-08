import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './userPost.module.css';
import {RouterEndpoints} from "../../routes";


const UserPost = ({userPost}) => {
    const {id, title} = userPost;
    const navigate = useNavigate();

    return (
        <div className={css.userPosts} onClick={() => navigate(`/${RouterEndpoints.posts}/${id}`)}>
            <h4>Post ID: {id}</h4>
            <h4>Post title: {title}</h4>
        </div>
    );
};

export {UserPost};