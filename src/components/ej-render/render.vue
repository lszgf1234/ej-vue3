<script lang="js">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'EjRender',
  props: {
    render: Function,
    default: [String, Number, Boolean],
  },
  render() {
    if (typeof this.render === "function")
      return this.render(h, {
        ...this.$attrs,
        _default: this.default
      })
    else
      return h('span', [String(this.default)])
  }
})
</script>

