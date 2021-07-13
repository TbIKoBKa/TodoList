import React from "react"

class TodoListItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onChangeComplete = this.onChangeComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = { completed: props.data.completed};
    }

    onChangeComplete(e)
    {
        this.setState({ completed: e.target.checked });
    }

    onDelete()
    {
        this.props.onRemove(this.props.data.id);
    }

    render()
    {
        return (
            <div className="todoList-item">
                <div>
                    <input type="checkbox" onChange={this.onChangeComplete}></input>
                    <p className={this.state.completed === true ? 'done' : ''}>{this.props.data.name}</p>
                </div>
                <button onClick={this.onDelete}>&#10006;</button>
            </div>
        )
    }
}

export default TodoListItem