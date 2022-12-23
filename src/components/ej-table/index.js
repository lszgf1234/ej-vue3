import EjTable from './index.vue'

export default {
  ...EjTable,
  install(app) {
    app.component(EjTable.name, EjTable)
  }
}
