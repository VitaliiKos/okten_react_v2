import React from 'react';
import './comments.css'

const Comments = (props) => {
    const {comment} = props;
    return (
        <>
            {comment &&
                <div className="commentCard">
                    <div className="commentTitle">
                        <h3>Comment ID: {comment.id}</h3>
                        <h3>Post ID: {comment.postId}</h3>

                    </div>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className='commentBody'>
                        <h4><em>{comment.email}</em></h4>
                        <p>{comment.body}</p>
                    </div>
                </div>
            }
        </>
    );
};

export {Comments};