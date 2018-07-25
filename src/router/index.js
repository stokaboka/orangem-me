import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// import OrangemEventsContainer from '@/components/OrangemEventsContainer'
// import OrangemProjectsContainer from '@/components/OrangemProjectsContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // {
    //   path: '#events',
    //   name: 'OrangemEventsContainer',
    //   component: OrangemEventsContainer
    // },
    // {
    //   path: '#projects',
    //   name: 'OrangemProjectsContainer',
    //   component: OrangemProjectsContainer
    // }
  ],

  scrollBehavior (to, from, savedPosition) {
    // возвращаем требуемую позицию прокрутки
    if (to.hash) {
      return {
        selector: `[id='${to.hash}']`,
        offset: { y: 80 }
      }
    } else {
      return { y: 0 }
    }
  }
})
