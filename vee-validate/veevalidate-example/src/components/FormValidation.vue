<template>
  <form @submit.prevent="onSubmit">
<BaseInput
  id="name"
  label="이름"
  placeholder="이름을 입력하세요"
  :rules="(value) => validate(value, this.nameValidation)"
  v-model="name"
/>

<BaseInput
  id="email"
  label="이메일"
  placeholder="이메일을 입력하세요"
  type="email"
  :rules="(value) => validate(value, this.emailValidation)"
  v-model="email"
/>

<BaseInput
  id="password"
  label="비밀번호"
  placeholder="비밀번호를 입력하세요"
  type="password"
  :rules="(value) => validate(value, this.passwordValidation)"
  v-model="password"
/>

    <button type="submit">제출</button>
  </form>
</template>

<script>
import BaseInput from './BaseInput.vue'
/* eslint-disable no-unused-vars */
import { nameValidation, emailValidation, passwordValidation } from '../validationRules'
console.log('Name Validation:', nameValidation)
console.log('Email Validation:', emailValidation)
console.log('Password Validation:', passwordValidation)
export default {
  components: { BaseInput },
  data () {
    return { name: '', email: '', password: '' }
  },
  methods: {
    validate (value, schema) {
      try {
        console.log('검증 중: ', { value, schema })
        schema.validateSync(value)

        return true
      } catch (error) {
        return error.message // 에러 메시지 반환
      }
    },
    onSubmit () {
      alert(`폼 제출 성공! 이름: ${this.name}, 이메일: ${this.email}`)
    }
  }
}
</script>
