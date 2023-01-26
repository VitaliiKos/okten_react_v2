import React from 'react';

import css from './todo.module.css'

const Todo = ({todo}) => {

    const {id, userId, title, completed} = todo;

    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.box}>
                    <div className={css.content}>
                        <h2>{id}</h2>
                        <h3>userId-{userId}</h3>
                        <h3>{title}</h3>
                        <p>Completed: {completed.toString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Todo};