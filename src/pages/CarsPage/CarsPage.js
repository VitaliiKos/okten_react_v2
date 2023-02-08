import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car, CarForm} from "../../components";
import css from './carPage.module.css'

const CarsPage = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.carWrapper}>
            <CarForm/>

            <div className={css.carListBlock}>{
                cars &&
                cars.map(car => <Car key={car.id} car={car}/>)
            }</div>
        </div>
    );
};

export {CarsPage};