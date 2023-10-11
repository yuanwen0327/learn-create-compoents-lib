<template>
  <div class="gie-richtext">
    <div ref="contentRef" v-html="content" contenteditable="true" @input="onInput" @blur="onBlur"
      class="gie-richtext__control"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { RichtextEmits, RichtextProps } from './Richtext';
import { formItemContextKey } from 'element-plus'

defineOptions({
  name: 'GieRichtext',
})

const elFormItem = inject(formItemContextKey)

const emit = defineEmits<RichtextEmits>()

const props = withDefaults(defineProps<RichtextProps>(), {
  modelValue: ''
})

const content = ref(props.modelValue || '')
const state = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})


const contentRef = ref<HTMLDivElement>()

const onInput = () => {
  state.value = contentRef.value?.innerHTML || ''
  elFormItem!.validate?.('change').catch((err) => console.warn(err))
}

const onBlur = () => {
  content.value = state.value
  elFormItem!.validate?.('blur').catch((err) => console.warn(err))
}

</script>