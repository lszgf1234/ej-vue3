<template>
  <el-timeline class="ej-workflow-preview">
    <el-timeline-item
        v-for="(it, index) of dataList"
        :key="index"
        :type="statusList.get(it.statue).type"
    >
      <div class="w-flex">
        <span class="w-w-32">{{ it.userName }}</span>
        <span :class="statusList.get(it.statue).class" class="w-ml-4 w-w-32">{{ it.name ||  statusList.get(it.statue).text}}</span>
        <span class="w-ml-4">{{ parseTime(it.date) }}</span>
      </div>
      <el-tooltip v-if="it.desc" :content="it.desc" placement="top">
        <p class="w-mt-2 w-inline-flex w-text-gray-400 w-truncate">备注：{{ it.desc }}</p>
      </el-tooltip>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup name="EjWorkflowPreview">
import {defineProps} from 'vue'
import { ElTimeline, ElTimelineItem} from 'element-plus'

import {parseTime} from '../../utils/ruoyi'

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
const props = defineProps({
  dataList: {
    type: Array,
    default: () => ([])
  },
})


</script>

<style lang="scss">

</style>
