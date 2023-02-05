import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {userActions} from "../../reducers/userReducer";
import css from './userForm.module.css'

const UserForm = ({userForUpdate, setUserForUpdate}) => {

    const {register, handleSubmit, reset, setValue} = useForm();
    const [, dispatch] = useAppReducer(value => value.userReducer);

    useEffect(() => {
        if (userForUpdate) {
            setValue('name', userForUpdate.name)
            setValue('surname', userForUpdate.surname)
            setValue('age', userForUpdate.age)
        }
    }, [setValue, userForUpdate])


    const setForm = (user) => {
        if (userForUpdate) {
            dispatch(userActions.UPDATE_BY_ID(userForUpdate.id, user))
            setUserForUpdate(null)
            reset()
        } else {
            if (user.name && user.surname && user.age){
                dispatch(userActions.ADD(user))
                reset()

            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(setForm)}>
                <div className={css.userFormInput}>
                    <label><h4>Name</h4>
                        <input type="text" {...register('name')}/>
                    </label>
                    <label><h4>Surname</h4>
                        <input type="text" {...register('surname')}/>
                    </label>
                    <label><h4>Age</h4>
                        <input type="text" {...register('age', {valueAsNumber: true})}/>
                    </label>
                    <button>{userForUpdate ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};

export {UserForm};