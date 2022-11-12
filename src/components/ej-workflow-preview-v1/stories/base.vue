<template>
  <div class="w-bg-white w-m-5 w-p-4">
    <ej-workflow-preview-v1 :data-list="data"></ej-workflow-preview-v1>
  </div>

</template>

<script setup>
import EjWorkflowPreviewV1 from '../'

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
    operateUserName: '用户0',
    orgName: '机构1',
    action: 0,
    createTime: new Date(),
  },{  // name: '已通过',
    operateUserName: '用户1',
    orgName: '机构1',
    action: 1,
    createTime: new Date(),
  },{
    name: '待审核',
    operateUserName: '用户2',
    orgName: '机构1',
    action: 2,
    createTime: new Date(),
    optionRemark: '这是一个描述',
  },{
    name: '驳回',
    operateUserName: '用户3',
    orgName: '机构1',
    action: 3,
    createTime: new Date(),
    optionRemark: '这是一个描述',
  },{
    name: '撤回',
    operateUserName: '用户4',
    orgName: '机构1',
    action: 4,
    createTime: new Date(),
    optionRemark: '这是一个描述',
  },
]

</script>

<style lang="scss"></style>
