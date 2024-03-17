import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';
import './TodoList.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = () => {
        const { inputValue } = this.state;
        if (inputValue.trim() !== '') {
            this.props.addTodo(inputValue);
            this.setState({ inputValue: '' });
        }
    };

    handleDelete = (index) => {
        this.props.deleteTodo(index);
    };

    render() {
        const { inputValue } = this.state;
        const { todos } = this.props;
        return (
            <div className="todo-container">
                <h1 className="todo-title">To-Do List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={this.handleChange}
                        placeholder="Add new todo..."
                    />
                    <button onClick={this.handleSubmit}>Add Todo</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <button className="delete-button" onClick={() => this.handleDelete(index)}>Delete</button> {}
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
