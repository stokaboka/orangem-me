<script>

import Vue from 'vue'
import VendorLogo from '@/components/VendorLogo'

export default {
  name: 'DynamicHtml',
  components: {VendorLogo},
  props: {
    template: {
      type: String,
      default: '<span></span>'
    }
  },
  data: function () {
    return {
      templateRender: null
    }
  },
  render: function (h) {
    if (this.templateRender) {
      return this.templateRender()
    } else { // If there is a template, I'll show it
      return h('div', 'loading...')
    }
  },
  watch: {
    // Every time the template prop changes, I recompile it to update the DOM
    template: {
      immediate: true, // makes the watcher fire on first render, too.
      handler () {
        let res = Vue.compile('<div>' + this.template + '</div>')

        this.templateRender = res.render

        // staticRenderFns belong into $options,
        // appearantly
        this.$options.staticRenderFns = []

        // clean the cache of static elements
        // this is a cache with the results from the staticRenderFns
        this._staticTrees = []

        // Fill it with the new staticRenderFns
        for (let i in res.staticRenderFns) {
          this.$options.staticRenderFns.push(res.staticRenderFns[i])
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
