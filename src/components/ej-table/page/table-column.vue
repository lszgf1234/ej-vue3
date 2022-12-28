<template>
  <el-table-column v-bind="$attrs">
    <template v-if="children.length">
      <ej-table-column v-for="(it, idx) of children" :key="idx" v-bind="it"></ej-table-column>
    </template>
  </el-table-column>
</template>
<script>
// 支持表头递归
import {ElTableColumn} from 'element-plus'
import {defineComponent} from 'vue'


/*defineProps({
  children: {
    type: Array,
    default: () => ([])
  }
})*/

export default defineComponent({
  name: 'EjTableColumn',

  components: {
    ElTableColumn,
  },

  props: {
    children: {
      type: Array,
      default: () => ([])
    }
  },
  setup() {},
})
</script>
<style scoped lang="scss"></style>
