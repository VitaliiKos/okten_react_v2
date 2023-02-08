import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import css from "./car.module.css";

const Car = ({car}) => {

    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className={css.carCard}>
                <h3>{id}. {brand}</h3>
                <h3>Year: {year}</h3>
                <h3>Price: {price}</h3>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
                <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};