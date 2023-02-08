import React from 'react';
import {useSelector} from "react-redux";

const PostDetail = () => {

    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {
                selectedPost &&
                <div>
                    <h4>{selectedPost.id}. {selectedPost.title}</h4>
                    <h4>{selectedPost.body}</h4>
                </div>
            }
        </div>
    );
};

export {PostDetail};