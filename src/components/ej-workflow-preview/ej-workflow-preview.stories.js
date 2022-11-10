import EjWorkflowPreview from './index';
import Base from './stories/base.vue'

// 配置 使用插件
export default {
    title: 'Example/EjWorkflowPreview',
    component: EjWorkflowPreview,
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
    components: { EjWorkflowPreview },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<EjWorkflowPreview v-bind="args" />',
});

export const base = Template.bind({})

base.args = {
    dataList: [
        {
            // name: '已通过',
            userName: '用户0',
            statue: 0,
            date: new Date(),
        },{  // name: '已通过',
            userName: '用户1',
            statue: 1,
            date: new Date(),
        },{
            name: '待审核',
            userName: '用户2',
            statue: 2,
            date: new Date(),
            desc: '这是一个描述',
        },{
            name: '驳回',
            userName: '用户3',
            statue: 3,
            date: new Date(),
            desc: '这是一个描述',
        },{
            name: '撤回',
            userName: '用户4',
            statue: 4,
            date: new Date(),
            desc: '这是一个描述',
        },
    ],
};
