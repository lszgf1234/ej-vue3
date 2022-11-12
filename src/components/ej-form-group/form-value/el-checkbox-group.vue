<template>
  <el-checkbox-group v-model="val$" v-bind="$attrs" v-on="listeners">
    <el-checkbox
      v-for="(it, idx) of options"
      :key="idx"
      v-bind="it"
    />
  </el-checkbox-group>
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue'
import {ElCheckboxGroup, ElCheckbox} from 'element-plus'

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
