import React from 'react';

import css from './homePage.module.css'

const HomePage = () => {
    return (
        <div className={css.wrapperHomepage}>
            <div className={css.description}>
                <h1>Lesson 6 </h1>
                <h2>зробіть слайс для постів і юзерсів</h2>

                <h3>Advance</h3>

                <h2>переробити першу таску с карами позбавившись стейтліфтингу в компонентах використовуючи
                    redux-toolkit</h2>
            </div>
        </div>
    );
};

export {HomePage};