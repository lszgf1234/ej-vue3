### 富文本编辑器
* 文本编辑
* 图片上传 
* 是否禁用
* todo: 解决样式冲突

### Props dataList
| Prop      | Type    | Default | Description   |
| --------- | ------- | ------- | ------------- |
| `v-model` | String |   ''   |   |
| `disabled` | Boolean |   false   |  是否禁用  |


### 编辑器-菜单说明
```js

const menuKeys = [
  "bold", // 加粗
  "underline", // 下划线
  "italic", // 斜体
  "through", // 删除线
  "code", // 代码
  "sub", // 上标
  "sup", // 下标
  "clearStyle", // 清除格式
  "color", // 颜色
  "bgColor", // 背景色
  "fontSize", // 字号
  "fontFamily", // 字体
  "indent", // 增加缩进
  "delIndent", // 减少缩进
  "justifyLeft", // 左对齐
  "justifyRight", // 右对齐
  "justifyCenter", // 居中
  "justifyJustify", // 两端对其
  "lineHeight", // 行高
  "insertImage", // 上传图片
  "deleteImage", // 删除图片
  "editImage", // 编辑图片
  "viewImageLink", // 查看图片链接
  "imageWidth30", // 30% 图片大小
  "imageWidth50", // 50% 图片大小
  "imageWidth100", // 100% 图片大小
  "divider", // 分割线
  "emotion", // todo: 待定 表情
  "insertLink", // 插入链接
  "editLink", // 编辑链接
  "unLink", // 取消链接
  "viewLink", // 查看链接
  "codeBlock", // 代码块
  "blockquote", // 块引用
  "headerSelect", // 标题选择
  "header1", // h1
  "header2", // h2
  "header3", // h3
  "header4", // h4
  "header5", // h5
  "todo", // 待办
  "redo", // 已办
  "undo", // 取消待办
  "fullScreen", // 全屏
  "enter", // 回车
  "bulletedList", // 无序列表
  "numberedList", // 有序列表
  "insertTable", // 插入表格
  "deleteTable", // 删除表格
  "insertTableRow", // 插入表格行
  "deleteTableRow", // 删除表格行
  "insertTableCol", // 插入表格列
  "deleteTableCol",  // 删除表格列
  "tableHeader", // 表格头
  "tableFullWidth", // 表格宽度 100%
  "insertVideo", // 插入视频
  "uploadVideo", // 上传视频
  "editVideoSize", // 编辑视频大小
  "uploadImage", // 上传图片
  "codeSelectLang", // 代码选择
  // 菜单分类  
  "group-video", // 视频组
  "group-image", // 图片组
]
```