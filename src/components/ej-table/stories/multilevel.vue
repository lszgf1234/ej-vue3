<template>
  <wx-table :data="data" :columns="columns"></wx-table>
</template>

<script setup>
import WxTable from '../index'
import {parseTime} from "../../../utils/ruoyi"
const data = Array.from({length: 5}).map((_, idx) => ({
  id: idx + 100,
  name: `名称${idx}`,
  endTime: '2022-08-30T03:08:57.007Z',
}))
const columns = [
  {
    label: '名称',
    children: [
      {label: 'id', prop: 'id',},
      {label: '名称', prop: 'name',},
    ]
  },
  {
    label: '日期-formatter',
    prop: 'endTime',
    formatter: function({endTime}) {
      return parseTime(endTime, '{y}-{m}-{d}')
    },
  },
]

</script>

<style lang="scss"></style>
