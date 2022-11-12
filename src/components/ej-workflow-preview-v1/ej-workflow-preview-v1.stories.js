import EjWorkflowPreviewV1 from '.';

// 配置 使用插件
export default {
    title: 'Example/EjWorkflowPreviewV1',
    component: EjWorkflowPreviewV1,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: { // 配置插件
        // backgroundColor: { control: 'color' },
        // onClick: {},
        // size: {
        //   control: { type: 'select' },
        //   options: ['small', 'medium', 'large'],
        // },
        // test: { control: 'color' }
    },
}

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { EjWorkflowPreviewV1 },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<EjWorkflowPreviewV1 v-bind="args" />',
});

export const base = Template.bind({})

base.args = {
  dataList: [
    {
      // name: '已通过',
      operateUserName: '用户0',
      orgName: '机构1',
      action: 0,
      createTime: new Date(),
    },{  // name: '已通过',
      operateUserName: '用户1',
      orgName: '机构1',
      action: 1,
      createTime: new Date(),
    },{
      name: '待审核',
      operateUserName: '用户2',
      orgName: '机构1',
      action: 2,
      createTime: new Date(),
      optionRemark: '这是一个描述',
    },{
      name: '驳回',
      operateUserName: '用户3',
      orgName: '机构1',
      action: 3,
      createTime: new Date(),
      optionRemark: '这是一个描述',
    },{
      name: '撤回',
      operateUserName: '用户4',
      orgName: '机构1',
      action: 4,
      createTime: new Date(),
      optionRemark: '这是一个描述',
    },
  ],
};
