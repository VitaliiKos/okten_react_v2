import React, {createContext, useReducer} from 'react';

import {initialUsers, myUserReducer} from "../reducers/userReducer";
import {initialCars, myCarReducer} from "../reducers/carReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {
    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(myCarReducer, null, initialCars)
    }


    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    StateProvider,
    StateContext
};