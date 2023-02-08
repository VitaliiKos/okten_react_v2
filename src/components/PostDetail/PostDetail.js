import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {postsActions} from "../../redux";
import {RouterEndpoints} from "../../routes";
import css from './postDetail.module.css';
import Comment from "../Comment/Comment";

const PostDetail = () => {
    const {selectedPost, postComments} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(postsActions.getById({id}))
        dispatch(postsActions.getPostComments({id}))
    }, [dispatch, id])

    return (
        <>
            {selectedPost &&
                <div className={css.postDetail}>
                    <div className={css.postInfo}>
                        <div className={css.buttonInfo}>
                            <button onClick={() => {
                                navigate(`/${RouterEndpoints.posts}`)
                                dispatch(postsActions.setSelectedPost(null))
                            }}>X
                            </button>
                        </div>


                        <div className={css.postDescription}>
                            <h3>{selectedPost.id}. {selectedPost.title}</h3>
                            <h3>{selectedPost.body}</h3>
                        </div>
                        {
                            postComments &&
                            <div className={css.postPostsList}>
                                {postComments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export {PostDetail};