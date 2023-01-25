import React from 'react';

import './todo.css';

const Todo = ({todo}) => {

    const {id, userId, title, completed} = todo;

    return (
        <div className={'todoItem'}>
            <h3>{id}. userId-{userId}.</h3>
            <h4>{title}</h4>
            <h4>Completed: {completed.toString()}</h4>
        </div>
    );
};

export {Todo};