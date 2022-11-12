import WorkflowPreview from './workflow-preview.vue'
export default {
  ...WorkflowPreview,
  install(app) {
    app.component(WorkflowPreview.name, WorkflowPreview)
  },
}
