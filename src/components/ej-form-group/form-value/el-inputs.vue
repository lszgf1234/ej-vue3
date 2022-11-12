<template>
  <component :is="template" v-bind="$attrs" v-model="val$" v-on="listeners" />
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue'
import {ElAutocomplete, ElCascader, ElDatePicker, ElInputNumber, ElSlider, ElSwitch, ElTimePicker, ElTimeSelect} from 'element-plus'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  template: {
    type: String,
    default: '',
  },
  modelValue: {
    // type: String,
    default: '',
  },
  listeners: {
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
