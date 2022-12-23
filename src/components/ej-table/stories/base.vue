<template>
  <wx-table :data="data" :columns="columns"></wx-table>
</template>

<script setup lang="jsx">
import {ElButton} from 'element-plus'

import WxTable from '../index.js'
import {parseTime} from "../../../utils/ruoyi";
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
        <ElButton size="small">Default</ElButton>
        <ElButton size="small" type="primary">Primary</ElButton>
        <ElButton size="small" type="success">Success</ElButton>
      </div>)
    },
  },
]

</script>

<style lang="scss"></style>
