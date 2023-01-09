<template>
  <el-form ref="formRef" :model="params$" v-bind="$attrs" :rules="rules$" @submit.prevent="() => {}" class="ej-form">
    <template
      v-for="(it, idx) of options$"
      :key="idx"
    >
      <el-form-item v-bind="it" :style="{
        width: it.itemWidth || itemWidth
      }">
        <ElInputs v-if="inputs.includes(it.template)" v-bind="it" v-model="params$[it.prop]"></ElInputs>
        <template v-else-if="it.slotName">
          <slot :name="it.slotName"></slot>
        </template>
        <component :is="it.template" v-else v-bind="it" v-model="params$[it.prop]"></component>
      </el-form-item>
    </template>

    <el-form-item v-if="action">
      <slot name="action">
        <template v-if="handles$.length && !$attrs.disabled">
          <el-button
            v-for="(it, idx) of handles$"
            :key="idx"
            v-bind="it"
            @click="it.click"
          >{{ it.title }}
          </el-button>
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
import {ElButton, ElForm, ElFormItem} from 'element-plus'
import {
  Refresh,
} from '@element-plus/icons-vue'

import {
  cardNoValidator,
  phoneValidator,
} from '../../utils/validate'

import * as CustomFormItem from './form-value'

const inputs = [
  'ElAutocomplete', 'ElCascader', 'ElDatePicker', 'ElInputNumber', 'ElSlider', 'ElSwitch', 'ElTimePicker', 'ElTimeSelect'
]

/**
 * 输入类 ElInput ElInputNumber
 *  ElInput
 *  el-input
 * 选择类 ElSelect ElTimePicker ElTimeSelect
 * */

function placeholderAdd(item) {
  if(!item) return ''
  const inputs = [
    'ElInput',
    'el-input',
    'ElInputNumber',
    'el-input-number',
  ]

  const selects = [
    'ElSelect',
    'ElTimePicker',
    'ElTimeSelect',
    'ElDatePicker',
    'el-select',
    'el-timepicker',
    'el-time-select',
    'el-date-picker',
  ]
  /**
   * 缺省placeholder处理*/

  if (inputs.includes(item.template)) {
    return `请输入${item.label}`
  } else if (selects.includes(item.template)) {
    return `请选择${item.label}`
  }
}

/**
 * 验证 - 针对输入类型
 * 处理验证规则
 * 提示信息 非空提示自动补全
 * 根据类型 自动添加验证规则
 * 返回规则对象
 *
 * 如果是空对象, 补全非空提示
 * 类型 type
 *  email
 *
 * */
function validationRules(rule, key, options) {
  let rule$ = {
    ...rule,
  }

  /** 处理非空*/
  if (rule.required) {
    const option = options.find(it => it.prop === key)
    rule$ = {
      message: placeholderAdd(option),
      ...rule$,
    }
  }

  /**
   * 处理type*/
  const types = new Map([
    ['phone', (rule, value, callback) => {
      if (!phoneValidator()) {
        callback(new Error('手机号格式错误'))
      }
      callback()
    }],
    ['cardNo', (rule, value, callback) => {
      if (!cardNoValidator()) {
        callback(new Error('身份证格式错误'))
      }
      callback()
    }],
  ])

  if (types.has(rule.type)) {
    rule$ = {
      validator: types.get(rule.type),
      trigger: 'blur',
    }
  }

  return rule$
}

export default defineComponent({
  name: 'EjFormGroup',

  components: {
    ...CustomFormItem,
    ElButton,
    ElForm,
    ElFormItem,
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
    action: {
      type: Boolean,
      default: true,
    },
    rules: {
      type: Object,
      default: () => ({})
    },
  },

  setup(props, ctx) {
    const formRef = ref(null)
    const params$ = computed({
      get() {
        return props.modelValue
      },
      set(val) {
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
        icon: Refresh,
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
    const options$ = computed(() => {
      return props.options.map(it => ({
        placeholder: placeholderAdd(it),
        ...it,
      }))
    })
    /** 处理验证规则
     * 遍历规则
     *   如果规则为对象
     *    处理对象
     *   如果规则为数组 ,继续map
     *    处理对象
     *   */
    const rules$ = computed(() => {
      const rules = {}
      Object.keys(props.rules).map(key => {
        if (Array.isArray(props.rules[key])) {
          rules[key] = props.rules[key].map(r => validationRules(r, key, props.options))
        } else {
          rules[key] = validationRules(props.rules[key], key, props.options)
        }
      })

      return rules
    })

    return {
      params$,
      inputs,
      handles$,
      formRef,
      options$,
      rules$,
    }
  }
})
</script>

<style lang="scss">
.ej-form.el-form--inline .el-form-item {
  margin-right: 0;
  padding-right: 32px;
}
</style>
