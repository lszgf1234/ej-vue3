### EjFormGroup form 表单组件

- 过滤器场景
- 表单提交组件场景
- 表单项组件支持拓展，在
- 自动缺省 placeholder 字段
    - 输入类，提示`请输入${label}`
    - 选择类，提示`请选择${label}`
- 验证
    - 自动添加验证规则 已支持`手机号 phone  身份证 cardNo  邮箱 email`
    - 提示信息 非空提示自动补全
- 支持单项设置是否可见
- 支持element-plus，[form](https://element-plus.org/zh-CN/component/form.html)中所有内置功能

### Props拓展

| Prop        | Type    | Default | Description                                                   |
| ----------- | ------- | ------- | ------------------------------------------------------------- |
| ` v-model`  | Object | {}      | 双向数据绑定参数                                             | 支持 v-model |
| `options`      | Array  | []      | 表单项集合                                                   |
| `handles`   | Array  |         | 自定义按钮 操作按钮选择，以及样式 'submit' 'reset' 'refresh' |
| `itemWidth` | String |         | 单个 formItem 的宽度                                         |
| `action` | Boolean |     true   |   是否有操作按钮                                  |
| `rules` | Object |     {}   |   规则                                  |

### optionsItem 支持表单中的所有属性

| Prop        | Type    | Default | Description                                                   |
| ----------- | ------- | ------- | ------------------------------------------------------------- |
| `label`     | String  | --      | 左侧 label                                                    |
| `prop`      | String  | --      | v-model 对象中的 key                                          |
| `template`  | String  |         | 组件名称，目前支持 el 中所有的表单项'eg: ElInput'             |
| `options`   | Array   |         | 使用`ElSelect、ElCheckboxGroup`等组件时，传入子项遍历参数集合 |
| `render`    | String  |         | 组件名为`EjRender`时，支持 render 渲染                          |
| `slotName`  | String  |         | 使用 slot 的形式自定义 item                                   |
| `listeners` | Object  |         | 事件集合                                                      |
| `invisible` | Boolean | false   | 不可见                                                        |

### []handleItem 支持表单中的所有属性

- handleItem 类型支持字符串与集合 `type handleItem = String | Array`
- 目前默认支持 `提交` `重置` `刷新` 功能
- `ELButton`实现，支持其内置的所有属性

| Prop     | Type     | Default | Description                                  |
| -------- | -------- | ------- | -------------------------------------------- |
| `title`  | String   | --      | 左侧 label                                   |
| `click`  | Function | --      | 点击事件                                     |
| `status` | String   | --      | 默认提供 'submit' 'reset' 'refresh' 'search' |

### Slots

| Name   | Description |
| ------ | ----------- |
| action | 操作区      |

### Events

| Name    | Payload        | Description |
| ------- | -------------- | ----------- |
| submit  | params: Object | 提交        |
| refresh | 刷新           |
| reset   | 重置           |

### 类型

export type Template = 'ElInput' | 'ElSelect' | 'ElCheckboxGroup' | 'ElRadioGroup' | 'EjRender'| 'ElAutocomplete' | 'ElCascader' | 'ElDatePicker' | 'ElInputNumber' | 'ElSlider' | 'ElSwitch' | 'ElTimePicker' | 'ElTimeSelect | '';
### EjFormGroup form 表单组件

- 过滤器场景
- 表单提交组件场景
- 表单项组件支持拓展，在
- 自动缺省 placeholder 字段
    - 输入类，提示`请输入${label}`
    - 选择类，提示`请选择${label}`
- 验证
    - 自动添加验证规则 已支持`手机号 phone  身份证 cardNo  邮箱 email`
    - 提示信息 非空提示自动补全
- 支持单项设置是否可见
- 支持element-plus，[form](https://element-plus.org/zh-CN/component/form.html)中所有内置功能

### Props拓展

| Prop        | Type    | Default | Description                                                   |
| ----------- | ------- | ------- | ------------------------------------------------------------- |
| ` v-model`  | Object | {}      | 双向数据绑定参数                                             | 支持 v-model |
| `options`      | Array  | []      | 表单项集合                                                   |
| `handles`   | Array  |         | 自定义按钮 操作按钮选择，以及样式 'submit' 'reset' 'refresh' |
| `itemWidth` | String |         | 单个 formItem 的宽度                                         |
| `action` | Boolean |     true   |   是否有操作按钮                                  |
| `rules` | Object |     {}   |   规则                                  |

### optionsItem 支持表单中的所有属性

| Prop        | Type    | Default | Description                                                   |
| ----------- | ------- | ------- | ------------------------------------------------------------- |
| `label`     | String  | --      | 左侧 label                                                    |
| `prop`      | String  | --      | v-model 对象中的 key                                          |
| `template`  | String  |         | 组件名称，目前支持 el 中所有的表单项'eg: ElInput'             |
| `options`   | Array   |         | 使用`ElSelect、ElCheckboxGroup`等组件时，传入子项遍历参数集合 |
| `render`    | String  |         | 组件名为`EjRender`时，支持 render 渲染                          |
| `slotName`  | String  |         | 使用 slot 的形式自定义 item                                   |
| `listeners` | Object  |         | 事件集合                                                      |
| `invisible` | Boolean | false   | 不可见                                                        |

### []handleItem 支持表单中的所有属性

- handleItem 类型支持字符串与集合 `type handleItem = String | Array`
- 目前默认支持 `提交` `重置` `刷新` 功能
- `ELButton`实现，支持其内置的所有属性

| Prop     | Type     | Default | Description                                  |
| -------- | -------- | ------- | -------------------------------------------- |
| `title`  | String   | --      | 左侧 label                                   |
| `click`  | Function | --      | 点击事件                                     |
| `status` | String   | --      | 默认提供 'submit' 'reset' 'refresh' 'search' |

### Slots

| Name   | Description |
| ------ | ----------- |
| action | 操作区      |

### Events

| Name    | Payload        | Description |
| ------- | -------------- | ----------- |
| submit  | params: Object | 提交        |
| refresh | 刷新           |
| reset   | 重置           |

### 类型

export type Template = 'ElInput' | 'ElSelect' | 'ElCheckboxGroup' | 'ElRadioGroup' | 'EjRender'| 'ElAutocomplete' | 'ElCascader' | 'ElDatePicker' | 'ElInputNumber' | 'ElSlider' | 'ElSwitch' | 'ElTimePicker' | 'ElTimeSelect | '';
