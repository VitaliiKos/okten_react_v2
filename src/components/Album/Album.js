import React from 'react';

const Album = ({albumItem}) => {
    const {id, userId, title} = albumItem;
    return (
        <div>
            <h3>{id}. (userId - {userId}) - {title}</h3>
        </div>
    );
};

export {Album};