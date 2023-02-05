import React, {createContext, useReducer} from 'react';

import {initialUsers, myUserReducer} from "../reducers/userReducer";
import {myCarReducer} from "../reducers/carReducer";

const StateContext = createContext(null);

const StateProvider = ({children}) => {
    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(myCarReducer, null, initialUsers)
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