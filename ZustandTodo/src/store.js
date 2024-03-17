import create from 'zustand';

const useStore = create((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({ todos: [...state.todos, { text }] })),
    deleteTodo: (index) =>
        set((state) => ({
            todos: state.todos.filter((_, i) => i !== index),
        })),
}));

export default useStore;
