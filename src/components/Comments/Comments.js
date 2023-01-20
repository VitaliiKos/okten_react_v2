import React from 'react';

import './comments.css';

const Comments = ({comment}) => {
    const {id, postId, email, body} = comment;
    return (
        <div className="commentCard">
            <div className="commentTitle">
                <h3>Comment ID: {id}</h3>
                <h3>Post ID: {postId}</h3>

            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className='commentBody'>
                <h4><em>{email}</em></h4>
                <p>{body}</p>
            </div>
        </div>
    );
};

export {Comments};