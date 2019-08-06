<template>
  <div class="toolbar drop-shadow">
    <div class="logo-container">
      <orangem-logo class="toolbar-logo toolbar-logo__position-left" :size="46" :logo="logo"></orangem-logo>
      <span class="toolbar-title toolbar-title__font toolbar-title__position-left">OranGem.me</span>
    </div>
    <nav class="nav">
      <router-link
        v-for="link in links"
        :key="link.id"
        :to="link.href"
        class="nav__item" >
        {{ link.title }}
      </router-link>
    </nav>
  </div>
</template>

<script>

import Logo from '@/components/Logo'

export default {
  name: 'orangem-toolbar',
  components: {
    'orangem-logo': Logo
  },
  props: {
    showlogo: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data () {
    return {
      logo: require('../../static/assets/orangem_logo_small.svg'),
      links: [
        {id: 0, title: 'About', href: '/', target: null},
        {id: 1, title: 'Technology', href: '#technology', target: null},
        {id: 2, title: 'Events', href: '#events', target: null},
        {id: 3, title: 'Projects', href: '#projects', target: null}
      ]
    }
  }
}
</script>

<style scoped>

  .toolbar {

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100vw;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: azure;
  }

  .logo-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .nav {
    /*height: 5rem;*/
    height: 64px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    align-self: center;
  }

  .nav__item{
    color: #111111;
    text-align: center;

    font-size: 1.4rem;
  }

  .toolbar-logo{
    position: relative;
  }

  .toolbar-logo__position-left{
    float: left;
  }

  .toolbar-title{
    position: relative;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .toolbar-title__font {
    font-size: 1.5rem;
    font-weight: bold;
    color: orangered;
  }

   .toolbar-title__position-left{
     float: left;
   }

  a, a:link, a:visited {
    background-color: azure;
    color: #333333;
    /*padding: 1rem 2rem;*/
    padding-left: 2rem;
    padding-right: 2rem;
    height: 60px;
    line-height: 60px;
    vertical-align: center;
    text-align: center;
    text-decoration: none;
    /*font-weight: bold;*/
    display: inline-block;
    /*transition: color .5s ease-out;*/
    transition: color, background-color .5s ease-out;
  }
  a:hover, a:active {
    background-color: orangered;
    color: white;
  }

  .drop-shadow {
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ;
  }

</style>
