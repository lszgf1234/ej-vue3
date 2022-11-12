import EjFormGroup from './index.vue'
export default {
  ...EjFormGroup,
  install(app) {
    app.component(EjFormGroup.name, EjFormGroup)
  }
}
