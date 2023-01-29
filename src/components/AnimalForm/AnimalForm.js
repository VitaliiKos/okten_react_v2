import React, {createRef} from 'react';

import css from './animalForm.module.css'

const AnimalForm = ({dispatch}) => {

    const cat = createRef();
    const dog = createRef();
    const saveAnimal = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    return (

        <div>
            <form onSubmit={saveAnimal} className={css.animalsForm}>
                <div style={{display: "flex"}}>
                    <input type="text" name={'cat'} ref={cat}/>
                    <button className={css.buttonSave}
                            onClick={() => dispatch({type: 'SAVE_CAT', payload: cat.current.value})}>
                        <span className="text">Save Cat</span></button>
                </div>

                <div style={{display: "flex"}}>
                    <input type="text" name={'dog'} ref={dog}/>
                    <button className={css.buttonSave}
                            onClick={() => dispatch({type: 'SAVE_DOG', payload: dog.current.value})}>
                        <span className="text">Save Dog</span></button>
                </div>

            </form>
        </div>
    );
};

export {AnimalForm};