import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {postsActions} from "../../redux";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postsActions.getAll());
    }, [dispatch]);

    return (
        <div>

            <Outlet/>

            {
                posts &&
                posts.map(post => <Post key={post.id} post={post}/>)
            }

        </div>
    );
};

export {PostsPage};