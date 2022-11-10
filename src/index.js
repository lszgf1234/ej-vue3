import EjWorkflowPreview from './components/ej-workflow-preview'
// import EjWorkflowPreviewV1 from './wx-workflow-preview-v1'
// import EjTable from './wx-table/index.js'
// import EjTableList from './Table/index.js'
// import EjFormGroup from './wx-form-group/index.js'
// import EjEditor from './wx-editor'
//
// import EjAuth from '@/directive/permission/btn-auths'

export {
  EjWorkflowPreview,
  // EjWorkflowPreviewV1,
  // EjTableList,
  // EjTable,
  // EjEditor,
  //
  // // 指令
  // EjAuth,
}

export default {
  install(app) {
    app.use(EjWorkflowPreview)
    // app.use(EjWorkflowPreviewV1)
    // app.use(EjTableList)
    // app.use(EjTable)
    // app.use(EjFormGroup)
    // app.use(EjEditor)
    //
    // app.use(EjAuth)
  }
}

