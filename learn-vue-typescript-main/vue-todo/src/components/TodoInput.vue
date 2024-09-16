<template>
  <div>
    <label for="todo-input"></label>
    <input type="text" id="todo-input" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  props: ["item"],
  methods: {
    // typescript의 strict옵션이 true로 되어 있기 때문에
    // 타입을 지정할 수 없을 땐 any라고라도 써줘야 함
    handleInput(event: any) {
      event.target.value;
      // 위 input의 @input이벤트와 emit의 input이벤트는 서로 다른 것
      // emit의 input이벤트는 컴포넌트 간에 대화하기 위한 수단
      this.$emit("input", event.target.value);
    },
    addTodo() {
      console.log("add");
    },
  },
});
</script>

<style scoped></style>
