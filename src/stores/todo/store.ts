import { Todo } from ".";
import { defineStore } from "pinia";

type State = {
    todo: Todo[];
    id: number;
};

export default defineStore("stores/todo", {
    state: (): State => ({
        todo: [],
        id: 0,
    }),
    getters: {},
    actions: {
        addTodo(text: string, completed: boolean) {
            this.$state.todo.push({
                id: this.$state.id++,
                text,
                completed,
            });
        },
    },
});
