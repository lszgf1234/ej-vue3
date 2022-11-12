<template>
  <div class="app-container">
    <el-button @click="disabled = !disabled">{{ !disabled ? '禁用' : '开启' }}</el-button>
    <ej-editor v-model="data" :disabled="disabled"></ej-editor>
<!--    <div>-&#45;&#45;显示组件-&#45;&#45;&#45;&#45;</div>
    <ej-editor-view :valueHtml="data"></ej-editor-view>-->
  </div>
</template>

<script setup>
import EjEditor from '../editor.vue'

let data = ref('')
let disabled = ref(false)

</script>

<style lang="scss"></style>
