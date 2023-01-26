import React from 'react';

import css from './homePage.module.css';

const HomePage = () => {
    return (
        <div className={css.task}>
            <h2>HomePage</h2>
            <h3>реалізувати 3 маршрути</h3>

            <ul>
                <li><b>todos</b> - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
                </li>

                <li><b>albums</b> - при переході на який тягнуться всі альбоми з
                    https://jsonplaceholder.typicode.com/albums
                </li>

                <li><b>comments</b> - при переході на який тягнуться всі комментарі
                    https://jsonplaceholder.typicode.com/comments
                    при натисканні на комментар тягнеться пост, до якого належіить цей коментар . приклад
                    запиту https://jsonplaceholder.typicode.com/posts/ID
                    id поста взяти з коментаря (postId)
                </li>
            </ul>

            <h4><em>відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.</em></h4>
        </div>
    );
};

export {HomePage};
