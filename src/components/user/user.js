import React from 'react';

const User = ({user: {id, name}, detail}) => {

    return (
        <div>

            <div>
                <h3>{id}. {name}</h3>
                <button onClick={() => detail(id)}>Detail</button>
            </div>

        </div>
    );
};

export {User};