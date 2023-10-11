import Richtext from './Richtext.vue'

/**
 * 定义props类型
 */
export interface RichtextProps {
  modelValue: string
}

/**
 * 定义emit类型
 */
export type RichtextEmits = {
  'update:modelValue': [value: string]
}

/**
 * 定义instance类型
 */
export type RichtextInstance = InstanceType<typeof Richtext>