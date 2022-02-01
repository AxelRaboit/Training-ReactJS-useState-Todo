import React, {useState } from 'react';

const AddTodoForm = ({addNewTodo}) => {

    const [addTodo, setAddTodo] = useState('');

    const handleTodo = (e) => {
        e.preventDefault()
        addNewTodo(addTodo)
        setAddTodo('')
        /* Cette ligne ci dessus va permettre de faire sorte que lorsque l'on soumet le
        formulaire, il n'y est plus rien d'affiché dans l'input utilisé */
    }

    return (
        <div>
            <div className='card card-body'>
                <form onSubmit={handleTodo}>
                    <div className='form-group'>
                        <label>Ajouter une Todo</label>
                        <input
                            className='form-control'
                            type="text"
                            value={addTodo}
                            onChange={(e) => setAddTodo(e.target.value)}
                        />
                        <input className='btn btn-success mt-3 w-100' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodoForm;