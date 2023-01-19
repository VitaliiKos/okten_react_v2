import React from 'react';
import './user.css'

const User = ({user: {id, name, username}, getPosts}) => {
    return (
        <div className={'userCard'}>
          <h3>{id}. {name} {username}</h3>
            <div className={'userButton'}>
                <button onClick={() => getPosts(id)}>Posts</button>
            </div>
        </div>
    );
};

export {User};