import React from 'react';

import './user.css';

const User = ({user: {id, name}, detail}) => {

    return (
        <div className={'userCard'}>
            <h3>{id}. {name}</h3>
            <div className={'userButton'}>
                <button onClick={() => detail(id)}>Detail</button>
            </div>
        </div>
    );
};

export {User};