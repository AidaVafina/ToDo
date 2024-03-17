import { makeAutoObservable } from 'mobx';

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        this.todos.push({ text });
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}

export default new TodoStore();
