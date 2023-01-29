import React from 'react';

import css from './dog.module.css';

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div className={css.dogItem}>
            <h3>{id}. {name}</h3>
            <button className={css.buttonDel} onClick={() => dispatch({type: 'DELETE_DOG', payload: id})}>Delete
            </button>
        </div>
    );
};

export {Dog};