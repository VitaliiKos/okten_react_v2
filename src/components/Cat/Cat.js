import React from 'react';

import css from './cat.module.css'

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div>
            <div className={css.catItem}>
                <h3>{id}. {name}</h3>
                <button className={css.buttonDel} onClick={()=>dispatch({type:'DELETE_CAT', payload:id})}>Delete</button>
            </div>
        </div>
    );
};

export {Cat};