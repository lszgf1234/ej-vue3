### 工作流预览组件

### Props dataList
| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| `dataList` | Array | []item   | 集合 |

### Props item
| Prop      | Type    | Default | Description   | require   |
| --------- | ------- | ------- | ------------- | ------------- |
| `name` | String |    | 节点名称 | false 如果不传，默认取状态枚举对应的描述|
| `userName` |  |    | 用户名 |  true|
| `status` | String |    | 节点状态 1（通过（绿色）、待审核 2（黄色）、驳回3（红色）、撤回4（灰色）） | true|
| `date` | String |    | 时间 | true|
| `desc` | String |    | 备注 | false|