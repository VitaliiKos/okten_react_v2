import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, postReducer, userReducer} from "./slice";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}