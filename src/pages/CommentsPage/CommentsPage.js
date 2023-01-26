import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services";
import {Comment} from "../../components";
import css from './commentPage.module.css';

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments([...value]))
    }, [])

    return (
        <div className={css.wrap}>
            <div className={css.listBlock}>
                {
                    comments.length && comments.map(comment => <Comment key={comment.id} commentUtem={comment}/>)
                }
            </div>

            <div className={css.currentPost}>
                <Outlet/>
            </div>

        </div>
    );
};

export {CommentsPage};