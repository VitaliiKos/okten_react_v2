import React from 'react';

const Post = ({postInfo}) => {

    const {id, title, userId, body} = postInfo;

    return (
        <div>
            <h3>PostID: {id}</h3>
            <h3>UserID: {userId}</h3>
            <h3>Title: {title}</h3>
            <h3>{body}</h3>

        </div>
    );
};

export {Post};