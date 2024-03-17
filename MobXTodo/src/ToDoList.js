import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from './store';
import './ToDoList.css';

const TodoList = observer(() => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            todoStore.addTodo(inputValue);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        todoStore.deleteTodo(index);
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Add new todo..."
                />
                <button onClick={handleSubmit}>Add Todo</button>
            </div>
            <ul>
                {todoStore.todos.map((todo, index) => (
                    <li key={index}>
                        <button className="delete-button" onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default TodoList;
