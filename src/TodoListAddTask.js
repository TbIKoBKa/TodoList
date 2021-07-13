import React from "react"

class TodoListAddTask extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { newItem: ''};
    }

    handleChange(e)
    {
        const value = e.target.value;
        this.setState({ newItem: value });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.newItem)
            this.props.onSubmit(this.state.newItem);
        this.setState({ newItem: '' });
    }

    render()
    {
        return(
            <form className="todoListAddForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Название новой задачи..." onChange={this.handleChange} value={this.state.newItem}></input>
                <input type="submit" value="Добавить"></input>
            </form>
        )
    }
}

export default TodoListAddTask