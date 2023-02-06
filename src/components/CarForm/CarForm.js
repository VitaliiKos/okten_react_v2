import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/carReducer";
import css from "./carForm.module.css";

const CarForm = () => {
    const {register, setValue, reset, handleSubmit} = useForm();
    const [{carForUpdate}, dispatch] = useAppReducer(value => value.carReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)

        }
    }, [carForUpdate, setValue])


    function setCarForm(car) {
        if (carForUpdate) {
            dispatch(carActions.UPDATE_BY_ID(carForUpdate.id, car))
            dispatch(carActions.CAR_FOR_UPDATE(null))
            reset()
        } else {
            if(car.brand && car.year && car.price){
                dispatch(carActions.ADD(car))
                reset()
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(setCarForm)}>
                <div className={css.carFormInput}>
                    <label><h4>Brand</h4>
                        <input type="text" {...register('brand')}/>
                    </label>
                    <label><h4>Year</h4>
                        <input type="text" {...register('year', {valueAsNumber: true})}/>
                    </label>
                    <label><h4>Price</h4>
                        <input type="text" {...register('price', {valueAsNumber: true})}/>
                    </label>
                    <button>{carForUpdate ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};

export {CarForm};