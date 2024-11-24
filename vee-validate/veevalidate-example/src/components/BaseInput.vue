<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      @blur="validate"
    />
    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    rules: Function, // 검증 함수
    value: String // v-model
  },
  emits: ['update:value'],
  data () {
    return {
      internalValue: this.value || '', // 입력값 관리
      error: '' // 에러 메시지
    }
  },
  methods: {
    validate () {
      if (!this.rules) {
        console.error('rules 함수가 전달되지 않았습니다.')
        return
      }
      console.log('rules 함수 실행, 입력 값:', this.internalValue)
      const result = this.rules(this.internalValue)
      this.error = result === true ? '' : result
    }

  },
  watch: {
    value (newValue) {
      this.internalValue = newValue // 부모 값 변경 시 internalValue 업데이트
    },
    internalValue (newValue) {
      this.$emit('update:value', newValue) // 자식 변경 -> 부모로 전달
    }
  }
}
</script>

<style>
.error {
  color: red;
  font-size: 12px;
}
</style>
