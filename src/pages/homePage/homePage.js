import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h3>Task 1.</h3>
            <h4>отримати пости та вивести їх використовуючи класові копмоненти</h4>
            <h4>отримати коментарі та вивести їх використовуючи класові копмоненти</h4>

            <h3>Task 2.</h3>
            <h4>{`Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}`}</h4>
            <h4>Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)</h4>

            <h3>Task Advance.</h3>
            <h4>реалізувати видалення для кожного при натисканні на кнопку delete</h4>
        </div>
    );
};

export {HomePage};