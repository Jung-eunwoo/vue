<script setup lang="ts">
import ButtonCounter from '@/components/ButtonCounter.vue'
</script>
<template>
    <h1>컴포넌트는 각 새로운 인스턴스를 소유하여 값이 따로 관리됨</h1>
    <br/>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</template>

<style lang=""></style>
