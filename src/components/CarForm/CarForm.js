import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carActions} from "../../redux";
import {CarValidator} from "../../validators/carValidator";
import css from './carForm.module.css';

const CarForm = () => {

    const {register, setValue, reset, handleSubmit} = useForm({
        mode: "all",
        resolver: joiResolver(CarValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [setValue, carForUpdate]);

    const save = async (car) => {
        if (carForUpdate) {
            const carId = carForUpdate.id;
            await dispatch(carActions.updateCar({carId, car}));
            dispatch(carActions.setCarForUpdate(null));
            reset();
        } else {
            await dispatch(carActions.createNew({car}));
            reset();
        }
    }

    return (
        <div className={css.formBlock}>
            <form onSubmit={handleSubmit(save)}>
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
        // <div className={css.carForm}>
        //     <form onSubmit={handleSubmit(save)}>
        //
        //         <div className="input_container">
        //             <input type="text" placeholder={'Insert brand'} {...register('brand')}/>
        //             {errors.brand && <h4>{errors.brand.message}</h4>}
        //             <label>Brand</label>
        //         </div>
        //         <div className="input_container">
        //             <input type="number" placeholder={'Insert year'} {...register('year')}/>
        //             {errors.year && <h4>{errors.year.message}</h4>}
        //             <label>Year</label>
        //         </div>
        //         <div className="input_container">
        //             <input type="number" placeholder={'Insert price'} {...register('price')}/>
        //             {errors.price && <h4>{errors.price.message}</h4>}
        //             <label>Price</label>
        //         </div>
        //
        //         <button className="btn" disabled={!isValid}>{!carForUpdate ? 'Add' : 'Update'}</button>
        //
        //     </form>
        // </div>
    );
};

export {CarForm};