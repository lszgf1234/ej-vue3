<template>
  <el-table-column v-bind="$attrs">
    <template v-if="children.length">
      <ej-table-column v-for="(it, idx) of children" :key="idx" v-bind="it"></ej-table-column>
    </template>
  </el-table-column>
</template>
<script setup name="EjTableColumn">
// 支持表头递归
import {ElTableColumn} from 'element-plus'
defineProps({
  children: {
    type: Array,
    default: () => ([])
  }
})
</script>
<style scoped lang="scss"></style>
