<template>
    <main class="max-w-[550px] min-w-[230px] w-full bg-white text-[#4d4d4d]">
        <TodoForm />
        <TodoContainer v-if="todoStore.todo.length" />
    </main>
</template>

<script setup lang="ts">
import { useTodo } from "@stores";

const todoStore = useTodo();
</script>

<style lang="scss">
main {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
}
</style>
