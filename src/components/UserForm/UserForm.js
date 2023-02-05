import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {userActions} from "../../reducers/userReducer";

const UserForm = ({userForUpdate}) => {

    const {register, handleSubmit, reset, setValue} = useForm();
    const [, dispatch] = useAppReducer(value => value.userReducer);

    useEffect(() => {
        if (userForUpdate) {
            // console.log(userForUpdate)
            setValue('name', userForUpdate.name)
            setValue('surname', userForUpdate.surname)
            setValue('age', userForUpdate.age)
        }
    }, [setValue, userForUpdate])


    const setForm = (user) => {
        if (userForUpdate) {
            dispatch(userActions.UPDATE_BY_ID(userForUpdate.id, user))
            reset()
        } else {
            dispatch(userActions.ADD(user))
            reset()
        }
    }

    return (
        <div>
            UserForm
            <form onSubmit={handleSubmit(setForm)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'surname'} {...register('surname')}/>
                <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
                <button>{userForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {UserForm};