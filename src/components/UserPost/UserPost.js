import React from 'react';

const UserPost = ({userPost}) => {
    const {id, title} = userPost;

    return (
        <div>
            <h4>Post ID: {id}</h4>
            <h4>Post title: {title}</h4>
        </div>
    );
};

export {UserPost};