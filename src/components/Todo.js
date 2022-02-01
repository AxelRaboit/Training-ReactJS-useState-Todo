import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { v5 as uuid } from 'uuid';

const Todo = () => {

    const [todo, setTodo] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'},
        {id: 3, todo: 'Acheter du fromage'},
        {id: 4, todo: 'Acheter du papier'},
        {id: 5, todo: 'Acheter de la salade'},
    ])

    const [warning, setWarning] = useState(false)
    
    const todoList = todo.map((todo) => {
        return (
            <li className='list-group-item' key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo !== ''){

            warning && setWarning(false);

            setTodo([
                ...todo, {
                    id: uuid,
                    todo: newTodo
                }
            ])
        } else {
            setWarning(true);
        }
    }

    const warningMessage = warning &&
        <div className="alert alert-danger mt-2" role="alert">
            Veuillez ne pas laisser le champ vide.
        </div>


    return (
        <div>
        <h1 className='text-center mt-2'>{todo.length} To-do</h1>
            {warningMessage}
            <ul className='list-group list-unstyled'>
                {todoList}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
}

export default Todo;