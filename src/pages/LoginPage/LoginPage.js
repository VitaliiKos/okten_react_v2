import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {

    const userName = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () => {
        logIn(userName.current.value)
        navigate(state.pathname, {replace:true})
    }

    return (
        <div>
            <input type="text" placeholder={'username'} ref={userName}/>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export {LoginPage};