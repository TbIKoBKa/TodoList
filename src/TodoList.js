import TodoListItem from './TodoListItem'
import TodoListAddTask from './TodoListAddTask'
import './TodoList.css'
import React from 'react';


class TodoList extends React.Component
{
    constructor(props) {
        super(props);
        this.DeleteItem = this.DeleteItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.onChangeComplete = this.onChangeComplete.bind(this)
        this.state = { list: props.data.tasks };
    }

    onChangeComplete(id) {
        let list = this.state.list.map(item => {
            if(item.id === id)
                    item.completed = !item.completed
                return item
        })
        this.setState({ list });
    }

    DeleteItem(id) {
        let newList = this.state.list.filter(item => item.id !== id)
        this.setState({ list: newList });
    }

    AddItem(value) {
        let newList = [...this.state.list, {id: Date.now(), name: value, completed: false}]
        this.setState({ list: newList});
    }

    render() {
        return(
            <div className="todoList">
                <h1 className="todoList-title">{this.props.data.title}</h1>
                {
                    this.state.list.length > 0
                    ? this.state.list.map(task => <TodoListItem key={task.id} data={task} onRemove={this.DeleteItem} onChange={this.onChangeComplete}/>)
                    : <h2>Список пуст :(</h2>
                }
                <TodoListAddTask onSubmit={this.AddItem}/>
            </div>
        )
    }
}

export default TodoList