import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {

    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(value => setPost({...value}))
    }, [postId])

    return (
        <div>
            {
                post && <Post postInfo={post}/>
            }
        </div>
    );
};

export {PostsPage};