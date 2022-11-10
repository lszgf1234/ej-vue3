<template>
  <div class="w-bg-white w-m-5 w-p-4">
    <ej-workflow-preview :data-list="data"></ej-workflow-preview>
  </div>

</template>

<script setup>
import EjWorkflowPreview from '../'

const statusList = new Map([
  [0, {
    text: '提交',
    class: 'w-text-green-500',
    type: 'success',
  }],
  [1, {
    text: '通过',
    class: 'w-text-green-500',
    type: 'success',
  }],
  [2, {
    text: '驳回',
    class: 'w-text-red-500',
    type: 'danger',
  }],
  [3, {
    text: '撤回',
    class: 'w-text-gray-500',
    type: 'info',
  }],
  [4, {
    text: '待审核',
    class: 'w-text-yellow-500',
    type: 'warning',
  }],
])

const data = [
  {
    // name: '已通过',
    userName: '用户0',
    statue: 0,
    date: new Date(),
  },{  // name: '已通过',
    userName: '用户1',
    statue: 1,
    date: new Date(),
  },{
    name: '待审核',
    userName: '用户2',
    statue: 2,
    date: new Date(),
    desc: '这是一个描述',
  },{
    name: '驳回',
    userName: '用户3',
    statue: 3,
    date: new Date(),
    desc: '这是一个描述',
  },{
    name: '撤回',
    userName: '用户4',
    statue: 4,
    date: new Date(),
    desc: '这是一个描述',
  },
]

</script>

<style lang="scss"></style>
