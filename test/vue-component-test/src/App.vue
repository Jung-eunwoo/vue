<template>
  <div>
    <div>
      <p>
        If Element Plus is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
    </div>
    <cp-icon-circle-button/>
  </div>
</template>

<script setup lang="ts">
import CpIconCircleButton from './components/CpIconCircleButton.vue';
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>