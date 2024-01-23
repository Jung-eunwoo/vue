<script setup lang="ts">
import {ref} from 'vue'

const countNum = ref(0);
</script>

<template>
<button @click="countNum++">
당신은 {{ countNum }}번 클릭했습니다.
</button>
</template>

<style scoped>
</style>
