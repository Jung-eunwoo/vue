import * as yup from 'yup'

export const nameValidation = yup
  .string()
  .required('이름은 필수입니다.')
  .min(3, '이름은 최소 3글자 이상이어야 합니다.')

export const emailValidation = yup
  .string()
  .required('이메일은 필수입니다.')
  .email('올바른 이메일 형식이 아닙니다.')

export const passwordValidation = yup
  .string()
  .required('비밀번호는 필수입니다.')
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
