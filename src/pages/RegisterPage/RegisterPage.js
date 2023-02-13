import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {registerService} from "../../services";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await registerService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>Save</button>
                </form>
            </div>

            {error &&
                <div>
                    {JSON.stringify(error)}
                </div>
            }

        </div>
    );
};

export {RegisterPage};