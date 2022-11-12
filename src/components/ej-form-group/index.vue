<template>
  <el-form ref="formRef" :model="params$" v-bind="$attrs">
    <div
      v-for="(it, idx) of options"
      :key="idx"
      :style="{
        width: itemWidth
      }"
      :class="{
        'w-inline': $attrs.inline,
      }"
    >
      <el-form-item v-bind="it">
        <ElInputs v-if="inputs.includes(it.template)" v-bind="it" v-model="params$[it.prop]"></ElInputs>
        <template v-else-if="it.slotName">
          <slot :name="it.slotName"></slot>
        </template>
        <component :is="it.template" v-else v-bind="it" v-model="params$[it.prop]"></component>
      </el-form-item>
    </div>

    <el-form-item>
      <slot name="action">
        <template v-if="handles$.length && !$attrs.disabled">
          <el-button
            v-for="(it, idx) of handles$"
            :key="idx"
            v-bind="it"
            @click="it.click"
          >{{it.title}}</el-button>
        </template>
      </slot>
    </el-form-item>
  </el-form>
</template>

<script>
/**
 * 注意：内置组件都可以传递给 is，但是如果想通过名称传递则必须先对其进行注册*/
/**
 * 拓展filter-value
 * 操作项
 * 简单一点直接用搜索与更新
 * 直接使用render函数比较合适
 * */

/**
 * render
 *  渲染render 函数
 * slot ok
 *  生成一个slot
 * input，autocomplete，cascader（级联选择器），date-picker（日期选择器），input-number，Slider 滑块，Switch 开关，TimePicker 时间选择器，TimeSelect 时间选择,
 *  渲染input ok
 *  双向数据绑定
 *  绑定其他的attr
 *  绑定事件
 * el-checkbox-group
 *  渲染checkout
 *  循环options
 *    双向数据绑定
 * radio-group（Radio 单选框）
 *  渲染radio-group
 *  双向数据绑定
 *  绑定其他的attr
 *  循环options
 *    绑定optionItem
 * Select 选择器 ok
 * */

import {defineComponent, computed, ref, isReactive} from 'vue'

import * as CustomFormItem from './form-value'

const inputs = [
  'ElAutocomplete', 'ElCascader', 'ElDatePicker', 'ElInputNumber', 'ElSlider', 'ElSwitch', 'ElTimePicker', 'ElTimeSelect'
]


export default defineComponent({
  name: 'EjFormGroup',

  components: {
    ...CustomFormItem,
  },

  emits: ['update:modelValue', 'submit', 'refresh', 'reset'],

  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Array,
      default: () => ([]),
    },
    itemWidth: {
      type: String,
      default: 'auto',
    },
    handles: {
      type: Array,
      default: () => (['submit', 'reset']),
    },
  },

  setup(props, ctx) {
    const formRef = ref(null)
    const params$ = computed({
      get () {
        return props.modelValue
      },
      set (val) {
        ctx.emit('update:modelValue', val)
      }
    })
    const handleSubmit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          ctx.emit('submit', params$)
        }
      })
    }
    const handles = {
      submit: {
        title: '提交',
        click: handleSubmit,
        type: 'primary',
      },
      search: {
        click: handleSubmit,
        type: 'primary',
        title: '搜索',
        // icon: 'search'
      },
      reset: {
        title: '重置',
        click() {
          formRef.value.resetFields()
          ctx.emit('reset', params$)
        },
      },
      refresh: {
        click() {
          ctx.emit('refresh', params$)
        },
        icon: 'refresh'
      },
    }
    const handles$ = props.handles.map(key => {
      /**
       * 如果 key 为对象说明是自定义按钮
       *  如果type在handles中，合并
       * 如果key 为字符串从 handles 中获取*/
      if (key instanceof Object) {
        return handles[key.status] ? Object.assign(handles[key.status]) : key
      } else {
        return handles[key]
      }
    })

    return {
      params$,
      inputs,
      handles$,
      formRef,
    }
  }
})
</script>

<style lang="scss"></style>
