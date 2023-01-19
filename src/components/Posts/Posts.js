import React from 'react';
import './post.css'

const Posts = (props) => {
    const {userPost, getComments} = props;
    return (
        <>
            {userPost &&
                <div className="postCard">
                    <div className="postTitle">
                        <h3>Post ID: {userPost.id}</h3>
                        <h3>User ID: {userPost.userId}</h3>
                    </div>
                    <div className="postBar">
                        <div className="postEmptyBar"></div>
                        <div className="postFilledBar"></div>
                    </div>
                    <div className='postBody'>
                        <h4><em>{userPost.title}</em></h4>
                        <p>{userPost.body}</p>

                        <div className={'commentButton'}>
                            <button onClick={() => getComments(userPost.id)}>Comments</button>
                        </div>
                        
                    </div>
                </div>

            }

        </>
    );
};

export {Posts};