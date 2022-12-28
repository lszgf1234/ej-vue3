<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <EjFormGroup v-model="params" :options="options" v-bind="formConfigs">
      <template #custom>
        <span class="w-text-red-500">这是一个通过slot自定义的表单项</span>
      </template>
    </EjFormGroup>
  </div>
</template>

<script setup lang="jsx">
import EjFormGroup from '../index'

const params = reactive({
  keywords: '',
  type: null,
})

const options = [
  {
    label: 'render',
    prop: 'radio',
    template: 'EjRender',
    render(h, attrs) {
      console.log(attrs)
      return (
        <div>这是一个通过render函数生成的表单项</div>
      )
    }
  },
]

const formConfigs = {
  handles: ['search', 'refresh'],
  inline: true,
}
</script>
<style lang="scss"></style>
