import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../../components";

const TodosPage = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => setTodos([...value]))
    }, [])

    return (
        <>
            {
                todos.length && todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </>
    );
};

export {TodosPage};