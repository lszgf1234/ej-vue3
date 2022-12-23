### 对el-table的二次封装
* 支持columns，类似于antd
* 封装需要统一样式
* 操作项统一样式
* 支持相邻参数自动合并（横向+竖向）


### Props dataList
| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| `columns` | Array |   []   |  表格列的配置描述，具体项见下表，参见Table-column 属性  |
| `autoMerge` | Boolean | false   | 自动合并开关，需要配置columns属性，否则不起作用 |
| `mergeIgnoreRegion` | Object | {} | 不需要合并的区域
| `needNum` | Boolean | false   | 排序开关 |

