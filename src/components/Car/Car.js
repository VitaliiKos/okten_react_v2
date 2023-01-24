import React from 'react';

import {carService} from "../../services";
import './car.css';

const Car = ({carItem, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = carItem;

    const deleteCar = (carId) => {
        carService.deleteById(carId).then(() => {
            carService.getAll().then(value => setCars([...value]))
        })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>{id}</h2>
                        <h3>{brand}</h3>
                        <h3>{year}</h3>
                        <p>{price} $</p>
                        <button onClick={() => setUpdateCar(carItem)}>Update</button>
                        <button onClick={() => deleteCar(id)}>Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};


export {Car};