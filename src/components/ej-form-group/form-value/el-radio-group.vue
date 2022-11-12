<template>
  <el-radio-group v-model="val$" v-bind="$attrs" v-on="listeners">
    <el-radio
      v-for="(it, idx) of options"
      :key="idx"
      v-bind="it"
    >{{it.text}}</el-radio>
  </el-radio-group>
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue'
import {ElRadioGroup, ElRadio} from 'element-plus'

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
