import EjFormGroup from './index.js';

import FilterStory from './stories/filter.vue'
// import MergeStory from './stories/merge.vue'
// import MultilevelStory from './stories/multilevel.vue'

// 配置 使用插件
export default {
    title: 'Example/EjFormGroup',
    component: EjFormGroup,
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
    components: { EjFormGroup },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<EjFormGroup v-bind="args" />',
});

// export const base = Template.bind({})
export const filter = () => ({
  components: { FilterStory },
  template: '<FilterStory />',
})
/*export const merge = () => ({
  components: { MergeStory },
  template: '<MergeStory />',
})
export const multilevel = () => ({
  components: { MultilevelStory },
  template: '<MultilevelStory />',
})*/
