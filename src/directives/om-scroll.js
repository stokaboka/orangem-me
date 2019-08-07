import Vue from 'vue'

export const OmScroll = {
  inserted: function (el, binding) {
    // console.log('inserted', el, binding)
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  },
  unbind: function (el, binding) {
    console.log('unbind', el, binding)
  }
}

Vue.directive('om-scroll', OmScroll)
