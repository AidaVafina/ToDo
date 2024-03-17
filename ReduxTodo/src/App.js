import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from './TodoList';
import todoReducer from './reducers';

const store = createStore(todoReducer);

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
};

export default App;
