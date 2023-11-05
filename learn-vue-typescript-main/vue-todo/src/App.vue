<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput :item="todoText"></TodoInput>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "./components/TodoInput.vue";

export default defineComponent({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
});
</script>

<style scoped></style>
