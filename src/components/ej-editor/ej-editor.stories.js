import EjEditor from './index';

// 配置 使用插件
export default {
    title: 'Example/EjEditor',
    component: EjEditor,
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

/**
 * v-model 如何使用
 * */
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { EjEditor },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<EjEditor v-model="args.moduleValue" :disabled="args.disabled" />',
});

export const base = Template.bind({})

base.args = {
  moduleValue: 'test',
  disabled: false,
};
