import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {postsActions} from "../../redux";
import Post from "../../components/Post/Post";
import css from './postPage.module.css'

const PostsPage = () => {
    const dispatch = useDispatch();
    const {posts, selectedPost} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postsActions.getAll());
    }, [dispatch, selectedPost]);

    return (
        <div className={css.wrapperPosts}>
            <Outlet/>
            <div className={css.postsListBlock}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export {PostsPage};