<template>
    <div class="todo-form flex w-full h-[65px] p-[16px] pl-0">
        <button
            class="todo-form-button invisible h-full bg-transparent text-[#e6e6e6] text-[22px] leading-[45px]"
        >
            ❯
        </button>
        <input
            type="text"
            placeholder="What needs to be done?"
            class="todo-form-input border-0 outline-0 bg-transparent pl-[16px] leading-[1.4em] text-[24px]"
            @keydown="handleKeyDown"
        />
    </div>
</template>

<script setup lang="ts">
// import { useTodo } from "@stores";

// import { useTodo } from "@stores";
// import { storeToRefs } from "pinia";

// const todoStore = useTodo();

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
        const target = event.target as HTMLInputElement;

        let { value } = target;
        value = value.trim();

        if (value.length) {
            //     setTodo((oldTodo) => [
            //         ...oldTodo,
            //         {
            //             id,
            //             text: value,
            //             completed: false,
            //         },
            //     ]);
            //     target.value = "";
            //     setId(id + 1);
        }
    }
}
</script>

<style lang="scss">
.todo-form {
    &-button {
        writing-mode: vertical-rl;

        &.show {
            visibility: visible;
        }

        &.active {
            color: #737373;
        }
    }

    &-input {
        &::placeholder {
            color: #e6e6e6;
            font-style: italic;
        }
    }
}
</style>
