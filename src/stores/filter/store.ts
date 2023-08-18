import { Filter } from ".";
import { defineStore } from "pinia";

type State = {
    list: Filter[];
    active: number;
};

type Getter = {};

type Action = {
    // addTodo: (text: string) => void;
    // toggleAllComplete: (completed: boolean) => void;
    // clearTodo: () => void;
};

export default defineStore<"filter", State, Getter, Action>("filter", {
    state: () => ({
        list: ["all", "active", "completed"],
        active: 0,
    }),
    getters: {},
    actions: {},
});
