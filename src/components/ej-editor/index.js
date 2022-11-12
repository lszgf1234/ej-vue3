import EjEditor from './editor.vue'

export default {
  ...EjEditor,
  install(app) {
    app.component(EjEditor.name, EjEditor)
  }
}
