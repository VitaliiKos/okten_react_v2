import React from 'react';

import './simpson.css';

const Simpson = ({person: {name, age, photo}}) => {

    return (
        <div className="simpsonCard">
            <div className="title">
                <h3>{name}</h3>
                <h3>Age: {age}</h3>

            </div>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className='simpsonImage'>
                <img src={photo} alt={name}/>
            </div>
        </div>
    );
};

export default Simpson;