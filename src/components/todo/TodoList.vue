<template>
    <ul class="flex flex-col list-none w-full">
        <TodoItem v-for="todo in todoFiltered" :key="todo" :todo="todo" />
    </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodo, useFilter, Todo } from "@stores";

const todoStore = useTodo();
const filterStore = useFilter();

const todoFiltered = computed<Todo[]>(() => {
    const { todo } = todoStore;

    switch (filterStore.getActiveFilter) {
        case "active":
            return todo.filter((item) => !item.completed);
        case "completed":
            return todo.filter((item) => item.completed);
        default:
            return todo;
    }
});
</script>

<style></style>
