import React from 'react';

import './rickAndMorty.css'

const RickAndMorty = ({character: {id, name, status, species, gender, image}}) => {

    return (
        <div className="cards">
            <div className="card">
                <img src={image} alt={name}/>
                <h2 className="card-title  rise large">{name}</h2>
                <div className="card-desc">
                    <h4>ID: {id}</h4>
                    <h4>Name: {name}</h4>
                    <h4>Status: {status}</h4>
                    <h4>Species: {species}</h4>
                    <h4>Gender: {gender}</h4>

                </div>
            </div>
        </div>
    );
};

export default RickAndMorty;