<template>
  <component :is="template" v-bind="$attrs" v-model="val$" v-on="listeners" />
</template>

<!--<script setup>
import {computed, defineProps, defineEmits} from 'vue'
import {
  ElAutocomplete,
  ElCascader,
  ElDatePicker,
  ElInputNumber,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
} from 'element-plus'

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
</script>-->

<style lang="scss"></style>
<script>
import {computed, defineProps, defineEmits, defineComponent} from 'vue'
import {
  ElAutocomplete,
  ElCascader,
  ElDatePicker,
  ElInputNumber,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
} from 'element-plus'

/*
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
*/

export default defineComponent({
  components: {
    ElAutocomplete,
    ElCascader,
    ElDatePicker,
    ElInputNumber,
    ElSlider,
    ElSwitch,
    ElTimePicker,
    ElTimeSelect
  },

  props: {
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
  },

  emits: ['update:modelValue'],

  setup(props, ctx) {
    const val$ = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        ctx.emit('update:modelValue', val)
      }
    })

    return {
      val$,
    }
  }
})
</script>

<style lang="scss"></style>
