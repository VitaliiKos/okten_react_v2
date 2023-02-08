import React from 'react';
import {NavLink} from "react-router-dom";

import css from './post.module.css';

const Post = ({post}) => {
    const {id, title, userId} = post;

    return (
        <NavLink to={id.toString()} className={css.postItem}>
            <div className={css.postCard}>
                <div className={css.card_title}>
                    <h3>Id: {id}.</h3>
                    <h3>UserId: {userId}</h3>
                    <h3>{title}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export default Post;