import { Todo } from ".";
import { defineStore } from "pinia";

type State = {
    todo: Todo[];
    id: number;
};

type Getter = {};

type Action = {
    addTodo: (text: string) => void;
    toggleAllComplete: (completed: boolean) => void;
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
        toggleAllComplete(completed: boolean) {
            this.$state.todo = this.$state.todo.map((item) => ({
                ...item,
                completed,
            }));
        },
        clearTodo() {
            this.$state.todo = this.$state.todo.filter(
                (item) => !item.completed,
            );
        },
    },
});
