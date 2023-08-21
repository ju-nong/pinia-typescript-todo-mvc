import { Todo } from ".";
import { defineStore } from "pinia";

type State = {
    todo: Todo[];
    id: number;
};

type Getter = {};

type Action = {
    addTodo: (text: string) => void;
    changeText: (id: number, text: string) => void;
    toggleComplete: (id: number) => void;
    toggleAllComplete: (completed: boolean) => void;
    destroyTodo: (id: number) => void;
    clearTodo: () => void;
};

export default defineStore<"todo", State, Getter, Action>("todo", {
    state: () => ({
        todo: [],
        id: 0,
    }),
    getters: {},
    actions: {
        addTodo(text: string) {
            this.$state.todo.push({
                id: this.$state.id++,
                text,
                completed: false,
            });
        },
        changeText(id: number, text: string) {
            this.$state.todo = this.$state.todo.map((item) =>
                item.id === id ? { ...item, text } : item,
            );
        },
        toggleComplete(id: number) {
            this.$state.todo = this.$state.todo.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            );
        },
        toggleAllComplete(completed: boolean) {
            this.$state.todo = this.$state.todo.map((item) => ({
                ...item,
                completed,
            }));
        },
        destroyTodo(id: number) {
            this.$state.todo = this.$state.todo.filter(
                (item) => item.id !== id,
            );
        },
        clearTodo() {
            this.$state.todo = this.$state.todo.filter(
                (item) => !item.completed,
            );
        },
    },
});
