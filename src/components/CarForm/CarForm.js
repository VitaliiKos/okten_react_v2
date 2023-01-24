import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validators";
import {carService} from "../../services";
import './carForm.css';


const CarForm = ({setCars, updateCar}) => {

    const {register, formState: {errors, isValid}, handleSubmit, reset, setValue,} = useForm({
        mode: "all",
        resolver: joiResolver(CarValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [setValue, updateCar])

    const setForm = async (car) => {
        if (updateCar) {
            carService.updateById(updateCar.id, car).then(() => {
                carService.getAll().then(value => setCars([...value]))
                reset()
            })
        } else {

            try {
                await carService.addNewCar(car);
                carService.getAll().then(value => setCars([...value]))
                reset()

            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

    return (
        <div className={'box'}>

            <form onSubmit={handleSubmit(setForm)}>

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

                <button className="btn" disabled={!isValid}>{!updateCar ? 'Add' : 'Update'}</button>

            </form>

        </div>
    );
};

export {CarForm};