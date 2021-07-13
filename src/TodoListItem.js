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
                    <input id={this.props.data.name + this.props.data.id.toString()} type="checkbox" defaultChecked = {this.props.data.completed ? true : false} onChange={this.onChangeComplete} ></input>
                    <label for={this.props.data.name + this.props.data.id.toString()} className={this.state.completed === true ? 'done' : ''}>{this.props.data.name}</label>
                </div>
                <button onClick={this.onDelete}>&#10006;</button>
            </div>
        )
    }
}

export default TodoListItem