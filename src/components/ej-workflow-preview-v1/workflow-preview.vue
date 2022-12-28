<template>
  <el-timeline class="ej-workflow-preview">
    <el-timeline-item
      v-for="(it, index) of dataList"
      :key="index"
      :type="statusList.get(it.action).type"
    >
      <div class="w-flex">
        <div class="w-w-32">
          <span>{{ it.operateUserName }}</span>
          <span v-if="it.orgName">({{ it.orgName }})</span>
        </div>
        <span :class="statusList.get(it.action).class" class="w-ml-4 w-w-32">{{ it.name ||  statusList.get(it.action).text}}</span>
        <span class="w-ml-4">{{ parseTime(it.createTime) }}</span>
      </div>
      <el-tooltip v-if="it.desc" :content="it.optionRemark" placement="top">
        <p class="w-mt-2 w-inline-flex w-text-gray-400 w-truncate">备注：{{ it.optionRemark }}</p>
      </el-tooltip>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup name="EjWorkflowPreviewV1">
import { ElTimeline, ElTimelineItem, ElTooltip} from 'element-plus'
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
