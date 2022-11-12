<template>
  <wx-table :data="data" :columns="columns"></wx-table>
</template>

<script setup lang="jsx">
import WxTable from '@/components/wx-table'
import {parseTime} from "@/utils/ruoyi";
const data = Array.from({length: 5}).map((_, idx) => ({
  id: idx + 100,
  name: `名称${idx}`,
  endTime: '2022-08-30T03:08:57.007Z',
}))
const columns = [
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: '日期-formatter',
    prop: 'endTime',
    formatter: function({endTime}) {
      return parseTime(endTime, '{y}-{m}-{d}')
    },
  },
  {
    label: '操作-jsx',
    width: 250,
    formatter: function({roles}) {
      return (<div>
        <el-button size="small">Default</el-button>
        <el-button size="small" type="primary">Primary</el-button>
        <el-button size="small" type="success">Success</el-button>
      </div>)
    },
  },
]

</script>

<style lang="scss"></style>
