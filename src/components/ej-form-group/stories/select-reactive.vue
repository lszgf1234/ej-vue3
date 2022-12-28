<template>
  <div  class="w-m-5 w-p-4 w-bg-white">
    <div class="w-mb-5">
      <el-button type="primary" @click="toggleOptions">响应式选择器-切换</el-button>
    </div>
    <EjFormGroup v-model="params" :options="options" v-bind="formConfigs"></EjFormGroup>
  </div>
</template>

<script setup>
import EjFormGroup from '../index'

const params = reactive({
  type: null,
})

const select = ref(Array.from({length: 4}).map((_, idx) => ({
  value: idx + 1,
  label: `1选项${idx}`,
})))

const options = reactive([
  {
    label: '选择器',
    prop: 'type',
    template: 'ElSelect',
    options: select,
  },
])

const formConfigs = {
  handles: ['submit', 'reset'],
  inline: true,
}

const toggleOptions = () => {
  select.value = Array.from({length: 4}).map((_, idx) => ({
    value: idx + 1,
    label: `选项${idx}`,
  }))
}
</script>
<style lang="scss"></style>
