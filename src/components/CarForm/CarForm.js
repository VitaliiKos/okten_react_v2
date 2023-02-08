import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {

    const {register, setValue, reset, handleSubmit, formState: {isValid, errors}} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [setValue, carForUpdate]);

    const save = async (car) => {
        if (carForUpdate) {
                const carId = carForUpdate.id;
                await dispatch(carActions.updateCar({carId, car}));
                reset();
        } else {
                await dispatch(carActions.createNew({car}));
                reset();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>

                <div className="input_container">
                    <input type="text" placeholder={'Insert brand'} {...register('brand')}/>
                    {errors.brand && <h4>{errors.brand.message}</h4>}
                    <label>Brand</label>
                </div>
                <div className="input_container">
                    <input type="number" placeholder={'Insert year'} {...register('year')}/>
                    {errors.year && <h4>{errors.year.message}</h4>}
                    <label>Year</label>
                </div>
                <div className="input_container">
                    <input type="number" placeholder={'Insert price'} {...register('price')}/>
                    {errors.price && <h4>{errors.price.message}</h4>}
                    <label>Price</label>
                </div>

                <button className="btn" disabled={!isValid}>{!carForUpdate ? 'Add' : 'Update'}</button>

            </form>
        </div>
    );
};

export {CarForm};