<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item label="表单校验测试1" prop="word">
        <gie-input v-model="ruleForm.word" ref="inputRef" />
      </el-form-item>
      <el-form-item label="表单校验测试2" prop="word2">
        <gie-richtext v-model="ruleForm.word2" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">
          提交
        </el-button>
        <el-button @click="onFocus">focus</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script setup lang="ts">
import type { InputInstance } from '@giegie/components';
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue';

const inputRef = ref<InputInstance>()
function onFocus() {
  inputRef.value?.focus()
}

interface RuleForm {
  word: string,
  word2: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  word: 'Hello',
  word2: '<p>World</p>',
})

const rules = reactive<FormRules<RuleForm>>({
  word: [
    { required: true, message: '请输入文字', trigger: 'blur' },
    { min: 3, max: 5, message: '请输入3 - 5 个字', trigger: 'blur' },
  ],
  word2: [
    { required: true, message: '请输入文字', trigger: 'blur' },
  ]
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

