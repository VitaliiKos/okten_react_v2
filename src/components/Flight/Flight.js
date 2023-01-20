import React from 'react';

import './flight.css';

const Flight = ({mission}) => {
    const {name, date_local, links: {patch: {small}}} = mission;
    return (

        <>
            {small &&
                <div className="card">
                    <div className="card_image">
                        <img src={small} alt={name}/>
                    </div>
                    <div className="card_title title-white">
                        <p>{name}</p>
                        <p>{date_local.split('T')[0]}</p>
                    </div>
                </div>
            }
        </>
    );
};

export {Flight};