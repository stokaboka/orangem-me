<template>
    <div id="#projects" data-scroll-id="projects">

      <article v-for="project in projects" v-bind:key="project.id" class="projects__container" v-om-scroll="onScrollHandler">
        <header class="projects__header">
          <h2 class="hello-world__article-header-font h2-decor" v-html="project.title"></h2>
          <span class="short-article__text short-article__text-font" v-html="project.description"></span>
          <div v-if="project.stack.length > 0" class="short-article__text short-article__text-font">
            <span>Stack: </span>
            <vendor-logo class="vendor-logo-space"
                         v-for="stack in project.stack"
                         v-bind:key="stack"
                         v-bind:vendor="stack">
            </vendor-logo>
          </div>
        </header>

        <photos-on-table-gallery class="projects__gallery"
                                 v-if="project.items.length > 0"
                                 v-bind:id="project.id"
                                 v-bind:items="project.items"
                                 sort-by="id"
                                 sort-direction="DESC">
        </photos-on-table-gallery>

      </article>

    </div>
</template>

<script>

import PhotosOnTableGallery from './ui/gallery/PhotosOnTableGallery'
import {HTTP} from './api'
import VendorLogo from '@/components/VendorLogo'
import DynamicHtml from '@/components/DynamicHtml'
import { OmScroll } from '../directives/om-scroll'

export default {
  name: 'orangem-projects',
  components: {DynamicHtml, VendorLogo, PhotosOnTableGallery},
  directives: {OmScroll},
  created () {
    HTTP.get('projects.json')
      .then(response => {
        this.projects = this.prepareData(response.data)
      })
      .catch(e => {
        this.errors.push(e)
        console.error(e)
      })
  },
  mounted: function () {
    this.projects = this.prepareData(this.projects)
  },
  methods: {
    onScrollHandler (evt, el) {
      const { scrollY } = window
      const {offsetTop, clientHeight} = el
      console.log('el.offsetTop', offsetTop, clientHeight, scrollY)
      return scrollY > offsetTop - clientHeight
    },
    prepareData: function (data) {
      return data.sort(this.sortItems)
    },
    sortItems: function (a, b) {
      if (a.id < b.id) {
        return 1
      } else if (a.id > b.id) {
        return -1
      } else {
        return 0
      }
    }
  },
  data: function () {
    return {
      errors: [],
      projects: [
        {
          'id': 5,
          'title': '<q>OranGem.me</q> project.',
          'description': 'SPA application for <q>OranGem.me</q> project.',
          'stack': ['vuejs', 'nodejs', 'ias'],
          'items': [
            // {'id': 1, 'url': require('../assets/orangem.jpg'), 'title': '<q>OranGem.me</q> project logo', 'mobile': true}
          ]
        },
        {
          'id': 4,
          'title': 'Project <q>Rb</q>: first production application.',
          'description': 'SPA application for fast creation of the interface for visualization and modification of relational data in accordance with models, the formation of the structure of the application based on the loaded model, the designer of models',
          'stack': ['angularjs', 'nodejs', 'ias', 'mongodb', 'mysql', 'postgre'],
          'items': [
            // {'id': 1, 'url': require('../assets/rb/1.png'), 'title': 'Welcome! Start screen.', 'mobile': true},
            // {'id': 2, 'url': require('../assets/rb/2.png'), 'title': 'Application: <q>Quality Control Documents</q>.', 'mobile': true},
            // {'id': 3, 'url': require('../assets/rb/3.png'), 'title': 'Login screen.', 'mobile': true},
            // {'id': 4, 'url': require('../assets/rb/4.png'), 'title': 'Edit mode screen.', 'mobile': true},
            // {'id': 5, 'url': require('../assets/rb/5.png'), 'title': 'Edit record.', 'mobile': false},
            // {'id': 6, 'url': require('../assets/rb/6.png'), 'title': 'Edit record...', 'mobile': true},
            // {'id': 7, 'url': require('../assets/rb/7.png'), 'title': 'Filter records: set date filter range.', 'mobile': false},
            // {'id': 8, 'url': require('../assets/rb/8.png'), 'title': 'Filter records: filtered recordset.', 'mobile': true},
            // {'id': 9, 'url': require('../assets/rb/9.png'), 'title': 'Scheduler: view diagram by days.', 'mobile': false},
            // {'id': 10, 'url': require('../assets/rb/10.png'), 'title': 'Scheduler: view diagram by weeks.', 'mobile': true},
            // {'id': 11, 'url': require('../assets/rb/11.png'), 'title': 'Scheduler: view diagram by months.', 'mobile': false},
            // {'id': 12, 'url': require('../assets/rb/12.png'), 'title': 'Hierarchical Tables: Root Recordset.', 'mobile': true},
            // {'id': 13, 'url': require('../assets/rb/13.png'), 'title': 'Hierarchical tables: level one expand.', 'mobile': false},
            // {'id': 14, 'url': require('../assets/rb/14.png'), 'title': 'Hierarchical tables: level two expand.', 'mobile': true},
            // {'id': 15, 'url': require('../assets/rb/15.png'), 'title': 'Hierarchical tables: level two expand...', 'mobile': false},
            // {'id': 16, 'url': require('../assets/rb/16.png'), 'title': 'Hierarchical tables: level tree expand.', 'mobile': true},
            // {'id': 17, 'url': require('../assets/rb/17.png'), 'title': 'The end.', 'mobile': true}
          ]
        },
        {
          'id': 3,
          'title': 'Alfa-Bank learning game',
          'description': 'Educational interactive game. They consist of two types of locations: 2D (training dialogs) and isometrics (imitation of the work situation: office, staff, customers, bonuses, etc). The goal of the game is the formation of given skills among workers and specialists. The game has up to 50 characters and more than 200 dynamically formed dialogs.',
          'stack': ['angularjs', 'ige'],
          'items': [
            // {'id': 1, 'url': require('../assets/alfabank/1.jpg'), 'title': 'Welcome!', 'mobile': true}
            // {'id': 2, 'url': require('../assets/alfabank/1_1.jpg'), 'title': 'Character choice', 'mobile': true},
            // {'id': 3, 'url': require('../assets/alfabank/2_1.jpg'), 'title': 'Help screen', 'mobile': true},
            // {'id': 4, 'url': require('../assets/alfabank/3.jpg'), 'title': 'The first clients came to the office', 'mobile': true},
            // {'id': 5, 'url': require('../assets/alfabank/4.jpg'), 'title': 'Conversation with the client', 'mobile': true},
            // {'id': 6, 'url': require('../assets/alfabank/5.jpg'), 'title': 'Additional Actions', 'mobile': true},
            // {'id': 7, 'url': require('../assets/alfabank/6.jpg'), 'title': 'Dialog with the client', 'mobile': true},
            // {'id': 8, 'url': require('../assets/alfabank/7.jpg'), 'title': 'Dialog with the client...', 'mobile': true},
            // {'id': 9, 'url': require('../assets/alfabank/8.jpg'), 'title': '...Dialog with the client...', 'mobile': true},
            // {'id': 10, 'url': require('../assets/alfabank/9.jpg'), 'title': 'Screen with result ', 'mobile': true},
            // {'id': 11, 'url': require('../assets/alfabank/10.jpg'), 'title': 'Exit the game', 'mobile': true}
          ]
        },
        {
          'id': 2,
          'title': 'M.Video learning game',
          'description': 'Educational interactive game. They consist of two types of locations: 2D (training dialogs) and isometrics (imitation of the work situation: office, staff, customers, bonuses, etc). The goal of the game is the formation of given skills among workers and specialists. The game has up to 50 characters and more than 200 dynamically formed dialogs.',
          'stack': ['angularjs', 'ige'],
          'items': [
            // {'id': 1, 'url': require('../assets/mvideo/1.jpg'), 'title': 'Welcome!', 'mobile': true},
            // {'id': 2, 'url': require('../assets/mvideo/2.jpg'), 'title': 'Welcome video.', 'mobile': false},
            // {'id': 3, 'url': require('../assets/mvideo/3.jpg'), 'title': 'Welcome video.', 'mobile': false},
            // {'id': 4, 'url': require('../assets/mvideo/4.jpg'), 'title': 'Assistant explains the rules.', 'mobile': false},
            // {'id': 5, 'url': require('../assets/mvideo/5.jpg'), 'title': 'Assistant explains the rules.', 'mobile': false},
            // {'id': 6, 'url': require('../assets/mvideo/6.jpg'), 'title': 'Isometric location: the trading room at the beginning of the game.', 'mobile': true},
            // {'id': 7, 'url': require('../assets/mvideo/7.jpg'), 'title': 'Isometric location: buyers come.', 'mobile': false},
            // {'id': 8, 'url': require('../assets/mvideo/8.jpg'), 'title': 'Isometric location: first discontent.', 'mobile': false},
            // {'id': 9, 'url': require('../assets/mvideo/9.jpg'), 'title': 'Isometric location: a question.', 'mobile': true},
            // {'id': 10, 'url': require('../assets/mvideo/10.jpg'), 'title': 'Isometric location: more questions.', 'mobile': false},
            // {'id': 11, 'url': require('../assets/mvideo/21.jpg'), 'title': 'Isometric location: select an actions.', 'mobile': true},
            // {'id': 12, 'url': require('../assets/mvideo/11.jpg'), 'title': '2D location: start of dialogue.', 'mobile': false},
            // {'id': 13, 'url': require('../assets/mvideo/12.jpg'), 'title': '2D location: question...', 'mobile': false},
            // {'id': 14, 'url': require('../assets/mvideo/13.jpg'), 'title': 'Isometric location: not satisfied customer', 'mobile': false},
            // {'id': 15, 'url': require('../assets/mvideo/22.jpg'), 'title': '2D location: the beginning of a new dialogue.', 'mobile': true},
            // {'id': 16, 'url': require('../assets/mvideo/23.jpg'), 'title': '2D location: the customer replied.', 'mobile': false},
            // {'id': 17, 'url': require('../assets/mvideo/24.jpg'), 'title': '2D location: help from assistant.', 'mobile': false},
            // {'id': 18, 'url': require('../assets/mvideo/25.jpg'), 'title': '2D location: the buyer doubts.', 'mobile': true},
            // {'id': 19, 'url': require('../assets/mvideo/26.jpg'), 'title': '2D location: help from assistant.', 'mobile': true},
            // {'id': 20, 'url': require('../assets/mvideo/27.jpg'), 'title': 'Isometric location: more questions.', 'mobile': false},
            // {'id': 21, 'url': require('../assets/mvideo/28.jpg'), 'title': '2D location: correct dialogue.', 'mobile': false},
            // {'id': 22, 'url': require('../assets/mvideo/29.jpg'), 'title': '2D location: the buyer is satisfied.', 'mobile': false},
            // {'id': 23, 'url': require('../assets/mvideo/30.jpg'), 'title': '2D location: the purchase was made.', 'mobile': false},
            // {'id': 24, 'url': require('../assets/mvideo/31.jpg'), 'title': 'Isometric location: choice of action with objects.', 'mobile': true},
            // {'id': 25, 'url': require('../assets/mvideo/32.jpg'), 'title': '2D location: action with objects.', 'mobile': true},
            // {'id': 26, 'url': require('../assets/mvideo/33.jpg'), 'title': '2D location: action with objects.', 'mobile': false},
            // {'id': 27, 'url': require('../assets/mvideo/41.jpg'), 'title': 'Isometric location: info screen.', 'mobile': false},
            // {'id': 28, 'url': require('../assets/mvideo/42.jpg'), 'title': 'Isometric location: results screen.', 'mobile': true},
            // {'id': 29, 'url': require('../assets/mvideo/43.jpg'), 'title': 'Isometric location: structure of dialogue with the buyer.', 'mobile': false},
            // {'id': 30, 'url': require('../assets/mvideo/44.jpg'), 'title': 'Isometric location: assistant is busy.', 'mobile': false}
          ]
        },
        {
          'id': 1,
          'title': 'M.Video multiplayer learning game',
          'description': 'Multiplayer interactive interactive game. They consist of two types of locations: 2D (training dialogs) and isometrics (imitation of the work situation: office, staff, customers, bonuses, etc). The goal of the game is the formation of given skills among workers and specialists. Participants of the game compete among themselves in the knowledge of the subject area.',
          'stack': ['angularjs', 'ige', 'nodejs', 'mongodb'],
          'items': [
            // {'id': 1, 'url': require('../assets/battle/1.jpg'), 'title': 'Welcome!', 'mobile': true},
            // {'id': 2, 'url': require('../assets/battle/2.jpg'), 'title': 'Login screen.', 'mobile': true},
            // {'id': 3, 'url': require('../assets/battle/3.jpg'), 'title': 'Start of the game.', 'mobile': true},
            // {'id': 4, 'url': require('../assets/battle/4.jpg'), 'title': 'Choice of the opponent.', 'mobile': true},
            // {'id': 5, 'url': require('../assets/battle/5.jpg'), 'title': 'To challenge.', 'mobile': true},
            // {'id': 6, 'url': require('../assets/battle/6.jpg'), 'title': 'The opponent is ready.', 'mobile': true},
            // {'id': 7, 'url': require('../assets/battle/7.jpg'), 'title': 'Duel!', 'mobile': true},
            // {'id': 8, 'url': require('../assets/battle/8.jpg'), 'title': 'Comparison of blows.', 'mobile': true},
            // {'id': 9, 'url': require('../assets/battle/9.jpg'), 'title': 'Result of a duel.', 'mobile': true}
          ]
        }
      ]

    }
  }
}
</script>

<style scoped>

.projects__header {
  display: flex;
  flex-flow: column nowrap;
}

.projects__container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /*overflow: hidden;*/
}
.projects__gallery {
  margin: 100px 1px 1000px 1px;
}

.h2-decor{
  border-left: orangered 0.75vmax solid;
  padding-left: 1vmax;
}

.hello-world__article-header-font {
  text-align: left;
  font-weight: normal;
  font-size: 3rem;
}

.short-article__text{
  display: inline-block;
  text-align: left;
}

.short-article__text-font {
  font-weight: normal;
  font-size: 2rem;
}

.vendor-logo-space::after {
  content: "   ";
  white-space: pre;
}

@media screen and (max-width: 1920px) {
  .projects__gallery {
    margin: 50px 1px 1000px 1px;
  }
}

@media screen and (max-width: 1680px) {
  .projects__gallery {
    margin: 50px 1px 800px 1px;
  }
}

@media screen and (max-width: 1440px) {
  .projects__gallery {
    margin: 50px 1px 700px 1px;
  }
}

@media screen and (max-width: 1280px) {
  .projects__gallery {
    margin: 50px 1px 600px 1px;
  }
}

@media screen and (max-width: 1024px) {
  .projects__gallery {
    margin: 50px 1px 500px 1px;
  }
}

@media screen and (max-width: 900px) {
  .projects__gallery {
    margin: 50px 1px 450px 1px;
  }
}

@media screen and (max-width: 800px) {
  .projects__gallery {
    margin: 50px 1px 400px 1px;
  }
}

@media screen and (max-width: 600px) {
  .projects__gallery {
    margin: 50px 1px 500px 1px;
  }
}

</style>
