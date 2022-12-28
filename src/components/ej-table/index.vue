<template>
  <el-table :span-method="columnMerge" v-bind="$attrs" :data="data">
    <el-table-column label="序号" v-if="needNum" type="index" :width="80" />
    <slot>
      <template v-for="(column, index) in columns" :key="index">
        <ej-table-column v-if="column.prop !== 'opt'" align="center" v-bind="column" />
        <el-table-column v-else fixed="right" :label="column.label" align="center" v-bind="column">
          <template #default="{ row }">
            <slot name="opt" :row="row"></slot>
          </template>
        </el-table-column>
      </template>
    </slot>
  </el-table>
</template>
<script setup name="EjTable">
/**
 * 支持columns，类似于antd 完成
 * 实现方式
 *  template 完成
 *  render
 *  render + jsx
 * */
import { defineProps, ref, watch } from 'vue'
import {ElTable, ElTableColumn} from 'element-plus'

import EjTableColumn from './page/table-column.vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  needNum: {
    type: Boolean,
    default: false,
  },
  autoMerge: {
    type: Boolean,
    default: false,
  },
  mergeIgnoreRegion: {
    type: Object,
    default: () => []
  }
})

/**合并代码--------start*/
/**
 * 根据 columns 与 data 构建合并规则
 * 返回 map集合，包含需要合并的单元格与忽略的单元格
 * 支持竖向与横向合并
 * */
/** 缓存 合并规则*/
const rules = ref(new Map())

watch(() => [props.data, props.columns], () => {
  if (!props.autoMerge) return
  /**
   * 扁平化 columns */
  rules.value = mergeRuleMap(props.data, flatColumns(props.columns))
}, { immediate: true })

function toKey(arr) {
  return arr.join('_')
}

/*
* 如果 有children 递归*/
function flatColumns(arr, newArr = []) {
  if (!arr) return []

  for (const it of arr) {
    newArr.push(...((it.children && it.children.length) ? flatColumns(it.children) : [it]))
  }

  return newArr
}

function judgeIgnoreRegion(x, y) {
  if (props.mergeIgnoreRegion && props.mergeIgnoreRegion.length != 0) {
    let findArr = props.mergeIgnoreRegion.find(item => {
      /*
      * item[0]为起始坐标，item[1]为终点坐标
      * x、y的位置大于等于起始坐标，小于等于终点坐标，则不进行合并
      */
      return (x >= item[0][0] && y >= item[0][1]) && (x <= item[1][0] && y <= item[1][1])
    })
    return findArr ? true : false;

  }
  return false;
}

/**
 * 构建合并规范
 * 返回 Map集合
 * 包含所有需要处理的 单元格
 *  key为单元格位置
 *  value为处理规则
 * */
function mergeRuleMap(data, columns) {
  const map = new Map()
  if (!data.length) return map
  /**
   * 遍历每一个单元格
   *  被合并过的 跳过*/
  /**
   * 如果x轴方向
   *  相等 继续，
   *    colspan++
   *    当前单元格 忽略
   *  否则结束
   * 如果y轴方向 相等 继续， 否则结束
   * 结束当前单元格
   * */
  for (let y = 0; y < data.length; y++) { // 纵坐标
    for (let x = 0; x < columns.length; x++) { // 横坐标
      if (judgeIgnoreRegion(x, y)) continue;

      const cur = {
        val: data[y][columns[x].prop],
        p: [x, y],
        rule: {
          rowspan: 1,
          colspan: 1
        }
      }
      let x1 = x
      let y1 = y
      if (!map.has(toKey(cur.p))) {
        while (y1 < data.length - 1) {
          y1++
          if (judgeIgnoreRegion(x1, y1)) break;
          if (cur.val === data[y1][columns[x1].prop]) {
            cur.rule.rowspan++
            map.set(toKey([x1, y1]), {
              rowspan: 0,
              colspan: 0
            })
          } else {
            y1 = data.length
            // return
          }
        }

        if (cur.rule.rowspan === 1) {
          y1 = cur.p[1]
          while (x1 < columns.length - 1) {
            x1++
            if (judgeIgnoreRegion(x1, y1)) break;
            if (cur.val === data[y1][columns[x1].prop]) {
              cur.rule.colspan++
              map.set(toKey([x1, y1]), {
                rowspan: 0,
                colspan: 0,
              })
            } else {
              x1 = columns.length
              // return
            }
          }
        }

        if (cur.rule.rowspan > 1 || cur.rule.colspan > 1) {
          map.set(toKey(cur.p), cur.rule)
        }
      }
    }
  }

  return map
}

function columnMerge({ row, column, rowIndex, columnIndex }) {
  if (!props.autoMerge) return
  const p = toKey([columnIndex, rowIndex])
  if (rules.value.has(p)) {
    return rules.value.get(p)
  }
}
/**合并代码--------end*/

</script>
<style scoped lang="scss"></style>
