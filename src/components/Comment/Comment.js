import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './comment.module.css'

const Comment = ({commentUtem}) => {
    const navigate = useNavigate();
    const {id, postId, email} = commentUtem;
    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.box}>
                    <div className={css.content}>
                        <div><h2>{id}</h2></div>
                        <div><h3>PostId-{postId}</h3></div>
                        <div><h3>{email}</h3></div>
                        <div className={css.commentButton}>
                            <button onClick={() => navigate(`${id}/posts/${postId}`)}>Show post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Comment};