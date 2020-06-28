import React from 'react'

export default function todo({todo,toggleTodo}) {
    function handleClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>

                <input type="checkbox" checked={todo.complete} onChange={handleClick}></input>
                {todo.name}

            </label>
        </div>
    )
}
