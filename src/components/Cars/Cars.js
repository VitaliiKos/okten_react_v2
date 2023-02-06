import React from 'react';

import {Car} from "../Car/Car";
import {useAppReducer} from "../../hooks/useAppReducer";
import css from './cars.module.css';

const Cars = () => {
    const [{cars}] = useAppReducer((reducer) => reducer.carReducer);

    return (
        <div className={css.carsList}>
            {cars &&
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};