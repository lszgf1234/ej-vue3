<template>
  <div class="editor-com editor-base">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>
<script setup name="EjEditor">
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, shallowRef, getCurrentInstance, computed, watch  } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['update:modelValue'])

const {proxy} = getCurrentInstance()

const valueHtml = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emits('update:modelValue', val)
  }
})

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = 'default'

const toolbarConfig = {
  excludeKeys: [ // 忽略的菜单
    // 'insertVideo', // 插入视频
    // 'uploadVideo', // 上传视频
    'group-video', // 视频组
  ]
}
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: { // 上传图片的配置
      server: '/upload/file',
      fieldName: 'file',
      // 小于该值就插入 base64 格式（而不上传），默认为 0
      base64LimitSize: 5 * 1024, // 5kb

      // 上传之前触发
      onBeforeUpload(file) {
        // file 选中的文件，格式如 { key: file }
        return file

        // 可以 return
        // 1. return file 或者 new 一个 file ，接下来将上传
        // 2. return false ，不上传这个 file
      },
      // 上传进度的回调函数
      onProgress(progress) {
        // progress 是 0-100 的数字
        console.log('progress', progress)
      },

      // 单个文件上传成功之后
      onSuccess(file, res) {
        console.log(`${file.name} 上传成功`, res)
      },

      // 单个文件上传失败
      onFailed(file, res) {
        console.log(`${file.name} 上传失败`, res)
      },

      // 上传错误，或者触发 timeout 超时
      onError(file, err, res) {
        console.log(`${file.name} 上传出错`, err, res)
      },

      // 自定义插入
      customInsert(res, insertFn) {
        /* res 即服务端的返回结果
         从 res 中找到 url alt href ，然后插入图片*/
        /** insertFn
         * @params
         *  url, 图片 src ，必须
         *  alt, 图片描述文字，非必须
         *  href 图片的链接，非必须
         * */
        const url = `/download/${res.data.fileUrl}`

        insertFn(url)
      },
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

watch(editorRef, (editor) => {
  // console.log(editor.getAllMenuKeys())
  // console.log(editor.getConfig())
})

watch(() => props.disabled, () => {
  handleDisabled()
})

function handleCreated(editor){
  editorRef.value = editor // 记录 editor 实例，重要！
  handleDisabled()
}

function handleDisabled() {
  props.disabled ? editorRef.value.disable() : editorRef.value.enable()
}

</script>
<style lang="scss">
@import "./base.scss";

.editor-com {
  /** 修正全屏被遮挡*/
  z-index: 10000;
}
</style>
