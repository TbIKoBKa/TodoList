import TodoListItem from './TodoListItem'
import TodoListAddTask from './TodoListAddTask'
import './TodoList.css'
import React from 'react';


class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.DeleteItem = this.DeleteItem.bind(this);
        this.AddItem = this.AddItem.bind(this);
        this.state = { list: props.data.tasks };
    }

    DeleteItem(id)
    {
        let deleteIndex = 0, newList = this.state.list.slice();

        for(let i = 0; i < newList.length; i++)
        {
            if(id === newList[i].id)
            {
                deleteIndex = i;
                break;
            }
        }

        newList.splice(deleteIndex, 1);
        this.setState({ list: newList });
    }

    AddItem(value)
    {
        let newlist = this.state.list.slice();
        newlist.push({id: Date.now(), name: value});
        this.setState({ list: newlist});
    }

    render()
    {
        let tasks = this.state.list.map(task => {
            return <TodoListItem key={task.id} data={task} onRemove={this.DeleteItem}/>    
        })

        return(
            <div className="todoList">
                <h1 className="todoList-title">{this.props.data.title}</h1>
                {tasks}
                <TodoListAddTask onSubmit={this.AddItem}/>
            </div>
        )
    }
}

export default TodoList