<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <ej-form-group v-model="params" :options="options" v-bind="formConfigs" v-on="handles"></ej-form-group>
  </div>
</template>

<script setup lang="jsx">
import {computed, reactive, ref} from 'vue'
import EjFormGroup from '../index'

const params = reactive({
  phone: '',
  cardNo: '',
})

const options = [
  {
    label: '手机号',
    prop: 'phone',
    template: 'ElInput'
  },
  {
    label: '身份证',
    prop: 'cardNo',
    template: 'ElInput'
  },

]

const formConfigs = reactive({
  handles: ['submit', 'reset'],
  itemWidth: '600px',
  labelWidth: 100,
  disabled: false,
  rules: {
    cardNo: [
      { required: true, trigger: 'blur' },
      {type: 'cardNo'}
    ],
    phone: [
      { required: true, trigger: 'blur' },
      {type: 'phone'}
    ],
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
