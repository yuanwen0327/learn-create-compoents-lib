import Input from './Input.vue'

/**
 * 定义props类型
 */
export interface InputProps {
  modelValue: string
  disabled?: boolean
}

/**
 * 定义emit类型
 */
export type InputEmits = {
  'update:modelValue': [value: string]
}

/**
 * 定义instance类型
 */
export type InputInstance = InstanceType<typeof Input>