import React from 'react';

import css from './post.module.css'

const Post = ({postInfo}) => {

    const {id, title, userId, body} = postInfo;

    return (
        <div className={css.container}>
            <div className={`${css.front}  ${css.side}`}>
                <div className={css.content}>
                    <h1>PostID: {id}</h1>
                    <h1>UserID: {userId}</h1>
                    <h1>Title: {title}</h1>
                    <p>I{body}</p>
                </div>
            </div>
        </div>
    );
};

export {Post};