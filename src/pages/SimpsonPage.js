import React from 'react';

import Simpson from "../components/Simpsons/Simpson";
import './css/pageStyle.css';

const SimpsonPage = () => {
    let simpsonFamily = [
        {
            id: 1,
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id: 2,
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 3,
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        }
    ]

    return (
        <div className="container">
            {simpsonFamily.map(value =>
                <Simpson key={value.id}
                         person={value}
                />)
            }
        </div>
    );
};

export default SimpsonPage;