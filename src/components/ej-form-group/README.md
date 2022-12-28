### EjFormGroup form表单组件
* 过滤器场景
* 表单提交组件场景
* 表单项组件支持拓展，在

### Props
| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| ` v-model` | Object | {}   | 双向数据绑定参数|支持v-model  |
| `form` | Array | []   | 表单项集合 |
| `handles`    | Array |        | 自定义按钮 操作按钮选择，以及样式 'submit' 'reset' 'refresh' |
| `itemWidth`    | String |         | 单个formItem的宽度 |

### formItem 支持表单中的所有属性
| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| `label` | String | --   |  左侧label |
| `prop` | String | --   |   v-model对象中的key |
| `template`    | String  |         | 组件名称，目前支持el中所有的表单项'eg: ElInput' |
| `options`    | Array  |         | 使用`ElSelect、ElCheckboxGroup`等组件时，传入子项遍历参数集合 |
| `render`    | String  |         | 组件为`EjRender`时，支持render渲染 |
| `slotName`    | String  |         | 使用slot的形式自定义item |
| `listeners`    | Array  |         | 事件集合 |

### []handleItem 支持表单中的所有属性
* handleItem类型支持字符串与集合 `type handleItem = String | Array`
* 目前默认支持 `提交` `重置` `刷新` 功能
* `ELButton`实现，支持其内置的所有属性

| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| `title` | String | --   |  左侧label |
| `click` | Function | --   |   点击时间 |
| `status` | String | --   |  默认提供 'submit' 'reset' 'refresh' 'search' |


### Slots

| Name | Description |
|---|---|
| action | 操作区 |

### Events

| Name | Payload | Description |
|---|---|---|
| submit | params: Object | 提交 |
| refresh | 刷新 |
| reset | 重置 |

### 类型

export type Template = 'ElInput' | 'ElSelect' | 'ElCheckboxGroup' | 'ElRadioGroup' | 'EjRender'| 'ElAutocomplete' | 'ElCascader' | 'ElDatePicker' | 'ElInputNumber' | 'ElSlider' | 'ElSwitch' | 'ElTimePicker' | 'ElTimeSelect | '';
