import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './comment.module.css'

const Comment = ({commentUtem}) => {
    const navigate = useNavigate();
    const {id, postId, name, email, body} = commentUtem;
    return (
        <div className={css.commentItem}>
            <h3>{id}. {name}</h3>
            <h3>postId:{postId}</h3>
            <h3>Email:{email}</h3>
            {/*<h3>Body:{body}</h3>*/}
            <button onClick={() => navigate(`${id}/posts/${postId}`)}>Show post</button>


        </div>
    );
};

export {Comment};