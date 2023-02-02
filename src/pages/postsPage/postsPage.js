import React, {useEffect, useState} from 'react';
import {ClassPostsComponent} from "../../components";
import {postService} from "../../services";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <ClassPostsComponent posts={posts}/>
        </div>
    );
};

export {PostsPage};