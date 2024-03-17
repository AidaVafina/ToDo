import React, { useState } from 'react';
import useStore from './store';
import './TodoList.css';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);
    const deleteTodo = useStore((state) => state.deleteTodo);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        deleteTodo(index);
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
                {todos.map((todo, index) => (
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
};

export default TodoList;
