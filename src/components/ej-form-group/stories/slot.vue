<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <WxFormGroup v-model="params" :options="options" v-bind="formConfigs">
      <template #custom>
        <span class="w-text-red-500">这是一个通过slot自定义的表单项</span>
      </template>
    </WxFormGroup>
  </div>
</template>

<script setup lang="jsx">
import WxFormGroup from '../index'

const params = reactive({
  keywords: '',
  type: null,
})

const options = [
  {
    label: '选择器',
    slotName: 'custom'
  },
]

const formConfigs = {
  handles: ['search', 'refresh'],
  inline: true,
}
</script>
<style lang="scss"></style>
