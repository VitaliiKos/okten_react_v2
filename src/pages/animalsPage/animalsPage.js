import React, {useReducer} from 'react';

import {AnimalForm, Cats, Dogs} from "../../components";
import css from './animalsPage.module.css'


function reducer(state, action) {

    switch (action.type) {
        case 'SAVE_CAT':
            if (action.payload) {
                return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload}]};
            }
            return {...state};
        case 'SAVE_DOG':
            if (action.payload) {
                return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload}]};
            }
            return {...state};
        case 'DELETE_CAT':
            const catID = state.cats.indexOf(cat=> cat.id !== action.payload)
            state.cats.splice(catID,1)
            return {...state};
        case 'DELETE_DOG':
            const dogID = state.dogs.indexOf(dog=> dog.id !== action.payload)
            state.dogs.splice(dogID,1)
            return {...state};
        default:
            throw new Error();
    }
}

const AnimalsPage = () => {
    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <>
            <AnimalForm dispatch={dispatch}/>

            <div className={css.animalsBlock}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </>
    );
};

export {AnimalsPage};