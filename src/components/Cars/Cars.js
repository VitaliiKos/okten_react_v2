import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import './cars.css'

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => {
            setCars([...value])
        })

    }, [])

    return (
        <>
            <CarForm setCars={setCars} updateCar={updateCar}/>

            <div className={'carsBlock'}>
                {cars && cars.map(car => <Car key={car.id} carItem={car} setUpdateCar={setUpdateCar}
                                              setCars={setCars}/>)}
            </div>
        </>
    );
};

export {Cars};