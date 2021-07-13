import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList.js'

let TodoListData = {
  title: 'Список дел',
  tasks: [
    {
      id: 1,
      name: 'Задача 1',
      completed: false
    },
    {
      id: 2,
      name: 'Задача 2',
      completed: false
    },
    {
      id: 3,
      name: 'Задача 3',
      completed: true
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <TodoList data={TodoListData}/>
  </React.StrictMode>,
  document.getElementById('root')
);