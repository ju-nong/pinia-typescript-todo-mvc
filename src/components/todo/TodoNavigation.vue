<template>
    <article
        class="todo-navigation w-full text-[#777] px-[15px] py-[10px] text-center relative flex items-center justify-center"
    >
        <span>{{ notCompletedTodoLength.toLocaleString() }} item left</span>
        <ul>
            <li
                v-for="(filter, index) in filterStore.list"
                :key="index"
                :class="[{ active: index === filterStore.active }]"
                @click="filterStore.active = index"
            >
                {{ filter }}
            </li>
        </ul>

        <!-- 현재 Todo 개수에서 complete 되지 않은 개수를 빼서, complete 된 Todo의 개수만 가져옴 -->
        <button
            v-if="todoStore.todo.length - notCompletedTodoLength"
            @click="todoStore.clearTodo"
        >
            Clear completed
        </button>
    </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodo, useFilter } from "@stores";

const todoStore = useTodo();

// Complete 되지 않은 Todo 개수
const notCompletedTodoLength = computed<number>(
    () => todoStore.todo.filter((item) => !item.completed).length,
);

const filterStore = useFilter();
</script>

<style lang="scss">
.todo-navigation {
    border-top: 1px solid #e6e6e6;

    &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
            0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
            0 17px 2px -6px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    > span {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    > ul {
        z-index: 2;
        list-style: none;
        display: flex;
        column-gap: 10px;

        > li {
            padding: 3px 7px;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 3px;
            text-transform: capitalize;

            &:hover {
                border-color: rgba(175, 47, 47, 0.1);
            }

            &.active {
                border-color: rgba(175, 47, 47, 0.2);
            }
        }
    }

    button {
        cursor: pointer;
        background-color: transparent;
        color: #777;
        font-size: 100%;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
