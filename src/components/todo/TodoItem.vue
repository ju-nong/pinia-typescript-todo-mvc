<template>
    <li class="todo-item">
        <button
            class="todo-item-complte-button"
            :class="isCompleted"
            @click="todoStore.toggleComplete(todo.id)"
        ></button>
        <input
            v-if="config.isEdit"
            type="text"
            ref="$input"
            :value="config.text"
            @input="handleChangeText"
        />
        <div v-else @dblclick="handleDoubleClick">{{ todo.text }}</div>
        <button
            class="todo-item-destroy-button"
            :class="isCompleted"
            @click="todoStore.destroyTodo(todo.id)"
        >
            ×
        </button>
    </li>
</template>

<script setup lang="ts">
import { PropType, computed, ref, reactive, nextTick } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useTodo, Todo } from "@stores";

const { todo } = defineProps({
    todo: {
        type: Object as PropType<Todo>,
        required: true,
    },
});

const todoStore = useTodo();

const $input = ref();
const config = reactive({
    isEdit: false,
    text: todo.text,
});

const isCompleted = computed(() =>
    config.isEdit ? "_hidden" : todo.completed ? "completed" : "",
);

async function handleDoubleClick() {
    config.isEdit = true;

    await nextTick(); // 데이터 변경 이후 DOM 업데이트를 마쳤을 때

    // 이후 코드 실행
    $input.value?.focus();

    onClickOutside($input, () => {
        config.isEdit = false;
        todoStore.changeText(todo.id, config.text);
    });
}

function handleChangeText(event: Event) {
    let { value } = event.target as HTMLInputElement;
    value = value.trim();

    if (value.length) {
        config.text = value;
    }
}
</script>

<style lang="scss">
.todo-item {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
    padding-left: 15px;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        > button:last-child {
            visibility: visible;
        }
    }

    &-complte-button {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border-radius: 100%;
        border: 2px solid #ededed;
        margin: 15px 0px;
        line-height: 40px;
        font-size: 22px;

        &._hidden {
            visibility: hidden;
        }

        &.completed {
            border-color: rgb(210, 230, 227);

            &::before {
                content: "✔";
                color: #61c4b1;
            }
        }
    }

    > div {
        flex: 1;
        padding: 15px;
        word-break: break-all;

        &.completed {
            color: #d9d9d9;
            text-decoration: line-through;
        }
    }

    > input {
        flex: 1;
        height: 71px;
        padding: 15px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        font-size: 24px;
    }

    &-destroy-button {
        position: absolute;
        top: 50%;
        right: 20px;
        font-size: 30px;
        color: #cc9a9a;
        background-color: transparent;
        transition: color 0.2s ease-out;
        transform: translateY(-50%);
        visibility: hidden;

        &:hover {
            color: #af5b5e;
        }

        &._hidden {
            visibility: hidden !important;
        }
    }
}
</style>
