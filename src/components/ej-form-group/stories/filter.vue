<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <EjFormGroup v-model="params" :options="options" v-bind="formConfigs" v-on="handles"></EjFormGroup>
  </div>
</template>

<script setup lang="jsx">
import {reactive, ref} from 'vue'

import EjFormGroup from '../index'

const params = reactive({
  keywords: '',
  type: null,
  checkbox: [],
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
]

const formConfigs = {
  handles: ['submit', 'reset'],
  inline: true,
}

const handles = ref({
  submit (p) {
    console.log('提交', p.value)
  },
  reset (p) {
    console.log('重置', p)
  }
})

</script>

<style lang="scss"></style>
