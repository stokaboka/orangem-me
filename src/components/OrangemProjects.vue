<template>
    <div id="#projects" data-scroll-id="projects">

      <article v-for="project in projects" v-bind:key="project.id" class="projects__container" v-om-scroll="{ key: project.id, handler: onScrollHandler }">
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
                                 v-if="project.visible && project.items.length > 0"
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
    onScrollHandler (key, evt, el) {
      const { scrollY, innerHeight } = window
      const windowHeightOffset = innerHeight / 2
      const {offsetTop} = el

      if (scrollY > offsetTop - windowHeightOffset) {
        this.projects = this.projects.map(e => {
          return {
            ...e,
            visible: e.id === key || e.visible
          }
        })
        return true
      }
      return false
    },
    prepareData: function (data) {
      return data
        .sort((a, b) => b.id - a.id)
        .map(e => {
          return {
            ...e,
            visible: false
          }
        })
    }
  },
  data: function () {
    return {
      errors: [],
      projects: []
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
