<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <div class="w-mb-5">
      <el-button type="primary" @click="formConfigs.disabled = !formConfigs.disabled">{{!formConfigs.disabled ? '禁用' : '启用'}}</el-button>
    </div>
    <ej-form-group v-model="params" :options="options" v-bind="formConfigs" v-on="handles"></ej-form-group>
  </div>
</template>

<script setup lang="jsx">
import {computed} from 'vue'
import EjFormGroup from '../index'

import RenderTable from './page/render-table'

const params = reactive({
  keywords: '',
  type: null,
  checkbox: [],
  radio: 1,
  date: null,
})

const options = [
  {
    label: '输入框',
    prop: 'keywords',
    template: 'el-input'
  },
  {
    label: '选择器',
    prop: 'type',
    template: 'ElSelect',
    options: Array.from({length: 4}).map((_, idx) => ({
      value: idx + 1,
      label: `选项${idx}`,
    }))
  },
  {
    label: '日期',
    prop: 'date',
    template: 'ElDatePicker',
    type: 'date',
    placeholder: 'Pick a day',
  },
  {
    label: 'render',
    template: 'EjRender',
    render(h, attrs) {
      return (
        <RenderTable/>
      )
    }
  },
]

const formConfigs = reactive({
  handles: ['submit', 'reset'],
  itemWidth: '600px',
  labelWidth: 100,
  disabled: false,
  rules: {
    keywords: [
      { required: true, message: 'Please input Activity name', trigger: 'blur' }
    ]
  },
})

const handles = ref({
  submit (p) {
    console.log('提交', p.value)
  },
  refresh (p) {
    console.log('刷新')
  }
})


</script>

<style lang="scss"></style>
