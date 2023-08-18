import { Filter } from ".";
import { defineStore } from "pinia";

type State = {
    list: Filter[];
    active: number;
};

type Getter = {
    getActiveFilter: (state: State) => string;
};

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
    getters: {
        getActiveFilter: (state) => state.list[state.active],
    },
    actions: {},
});
