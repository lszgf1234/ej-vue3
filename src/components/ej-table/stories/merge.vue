<template>
  <div>
    <el-button @click="test">修改data</el-button>
    <el-button @click="test2">修改columns</el-button>
    <ej-table :data="data" :columns="columns" autoMerge :mergeIgnoreRegion="mergeIgnoreRegion"></ej-table>
  </div>
</template>

<script setup lang="jsx">
import {ref} from 'vue'
import EjTable from '../index'

let data = ref([
  {
    id: 1,
    name: '机组1',
    text: 'a1',
  },
  { // 横向合并
    id: 'a2',
    name: '机组1',
    text: 'a2',
  },
  {
    id: 3,
    name: '机组1',
    text: 'a3',
  },
  {
    id: 4,
    name: '机组1',
    text: 'a4',
  },
  {
    id: 5,
    name: '机组2',
    text: 'a5',
  },
  {
    id: 6,
    name: '机组2',
    text: 'a5',
  },
])

const columns = ref([
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: 'merge',
    children: [
      {
        label: 'ID',
        prop: 'id',
      },
      {
        label: 'text',
        prop: 'text',
      },
    ]
  },
])

/* 不参与合并区域，左上角为起点，右下角为终点
* [横坐标，纵坐标]
* [[起点坐标],[终点坐标]]*/
const mergeIgnoreRegion = ref([
  [[0,2],[1,3]],[[2,1],[2,3]]
])

const test = ref(() => {
  data.value.length = data.value.length - 1
})
const test2 = ref(() => {
  columns.value.length = columns.value.length - 1
})

</script>

<style lang="scss"></style>
