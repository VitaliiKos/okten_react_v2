import React from 'react';

import css from './comment.module.css';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div className={css.comment}>
            <h4>Comment ID: {id}</h4>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>{body}</h4>
        </div>
    );
};

export default Comment;