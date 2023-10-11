<template>
  <div class="gie-input">
    <el-input v-model="state" ref="inputRef" type="text" :disabled="props.disabled" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

import { ElInput } from 'element-plus'

import type { InputEmits, InputProps } from './Input';

defineOptions({
  name: 'GieInput',
})

const emit = defineEmits<InputEmits>()

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  disabled: false
})

const state = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})


const inputRef = ref<InstanceType<typeof ElInput>>()

function focus() {
  inputRef.value?.focus()
}

defineExpose({
  focus
})
</script>