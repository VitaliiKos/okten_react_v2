import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{id}. {brand}</h4>
            <h4>Year: {year}</h4>
            <h4>Price: {price}</h4>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};