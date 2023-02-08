import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {postsActions} from "../../redux";

const Post = ({post}) => {
    const {id, title} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{id}. {title}</h4>
            <NavLink to={id.toString()} onClick={() => dispatch(postsActions.getById({id}))}>Show detail</NavLink>
        </div>
    );
};

export default Post;