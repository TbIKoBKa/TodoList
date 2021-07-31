import React from "react"

function TodoListItem(props)
{
    return (
        <div className="todoList-item">
            <div>
                <input id={props.data.name + props.data.id.toString()} type="checkbox" defaultChecked = {props.data.completed} onChange={() => props.onChange(props.data.id)}></input>
                <label htmlFor={props.data.name + props.data.id.toString()} className={props.data.completed ? 'done' : ''}>{props.data.name}</label>
            </div>
            <button onClick={() => props.onRemove(props.data.id)}>&#10006;</button>
        </div>
    )
}

export default TodoListItem