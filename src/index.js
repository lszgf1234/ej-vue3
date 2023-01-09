import EjWorkflowPreview from './components/ej-workflow-preview'
import EjWorkflowPreviewV1 from './components/ej-workflow-preview-v1'
// import EjTable from './wx-table/index.js'
// import EjTableList from './Table/index.js'
import EjFormGroup from './components/ej-form-group/index.js'
import EjEditor from './components/ej-editor'
//
// import EjAuth from '@/directive/permission/btn-auths'

/**
 * 集合
 * 按需
 * */
const components = [
  EjWorkflowPreview,
  EjWorkflowPreviewV1,
  // EjTableList,
  // EjTable,
  EjFormGroup,
  EjEditor,
  //
  // // 指令
  // EjAuth,
]
export {
  EjWorkflowPreview,
  EjWorkflowPreviewV1,
  // EjTableList,
  // EjTable,
  EjFormGroup,
  EjEditor,
  //
  // // 指令
  // EjAuth,
}

export default {
  install(app) {
    components.forEach(component => app.use(component.name, component))
  }
}

