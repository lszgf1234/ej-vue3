<template>
  <el-input v-model.trim="val$" v-bind="{
    ...attrs,
    ...$attrs,
  }" v-on="listeners" />
</template>

<script setup>
/**
 * 解决空格的问题
 * 解决
 *  type:
 *    text 25字符
 *    textarea  500字符*/
import {computed, defineProps, defineEmits} from 'vue'
import {ElInput} from 'element-plus'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    // type: Array,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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

let attrs = computed(() => {
  const obj = {
    type: props.type,
  }

  if (props.type === 'text') {
    obj.maxlength = 25
  } else if(props.type === 'textarea') {
    obj.maxlength = 500
  }

  return obj
})
</script>

<style lang="scss"></style>
