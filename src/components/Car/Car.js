import React from 'react';

import {useAppReducer} from "../../hooks/useAppReducer";
import {userActions} from "../../reducers/userReducer";
import css from './car.module.css';


const Car = ({car, setCarForUpdate}) => {

    const [, dispatch] = useAppReducer(value => value.carReducer);
    const {id, brand, year, price} = car;

    return (
        <div className={css.carCard}>
            <h4>Id: {id}</h4>
            <h4>Brand: {brand}</h4>
            <h4>Year: {year}</h4>
            <h4>Price: {price}</h4>
            <div className={css.carButton}>
                <button onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
            </div>
        </div>
    );
};

export {Car};