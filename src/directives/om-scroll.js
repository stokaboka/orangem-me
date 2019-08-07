import Vue from 'vue'

export const OmScroll = {
  inserted: function (el, binding) {
    // console.log('inserted', el, binding)
    let f = function (evt) {
      const {key, handler} = binding.value
      if (handler(key, evt, el)) {
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
