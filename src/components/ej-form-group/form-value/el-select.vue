<template>
  <el-select v-model="val$" placeholder="Select" v-on="listeners">
    <el-option
      v-for="(item, idx) of options"
      :key="idx"
      v-bind="item"
      v-on="listeners"
    />
  </el-select>
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue'
import {ElSelect, ElOption} from 'element-plus'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    // type: Array,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  listeners:  {
    type: Object,
    default: () => ({}),
  },
})
const val$ = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
</script>

<style lang="scss"></style>
