<template>
  <div class="hello-world">
    <article>
      <header>
        <orangem-logo :size="300" :logo="logo"/>
        <h1 class="hello-world__title-font hello-world__title-animation" >Welcome to<br/><span class="logo__text">OranGem.me</span></h1>
      </header>
      <orangem-about>
      </orangem-about>
    </article>

    <article id="#technology" data-scroll-id="technology">
      <header>
        <h1 class="hello-world__article-header-font h1-decor">Technology</h1>
      </header>
      <orangem-technology>
      </orangem-technology>
    </article>

    <article id="#events" data-scroll-id="events">
      <header>
        <h1 class="hello-world__article-header-font h1-decor">Events</h1>
      </header>
      <orangem-events>
      </orangem-events>
    </article>

    <article id="#projects" data-scroll-id="projects">
      <header>
        <h1 class="hello-world__article-header-font h1-decor">Projects</h1>
      </header>
      <orangem-projects>
      </orangem-projects>
    </article>

  </div>
</template>

<script>

import Logo from './Logo'
import IconText from './text/IconText'
import OrangemEvents from './OrangemEvents'
import OrangemTechnology from './OrangemTechnology'
import OrangemAbout from './OrangemAbout'
import OrangemProjects from './OrangemProjects'

export default {
  name: 'HelloWorld',
  components: {
    OrangemProjects,
    OrangemAbout,
    OrangemTechnology,
    OrangemEvents,
    IconText,
    'orangem-logo': Logo
  },
  data () {
    return {
      logo: require('../../static/assets/orangem_logo_5_slices_skin.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header{

  }

  h1{
    font-weight: normal;
    font-size: 4rem;
  }

  h2{
    font-weight: bold;
    font-size: 2rem;
  }

  .h2-decor{
    border-left: orangered 1rem solid;
    padding-left: 1vmax;
  }

  .hello-world {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin-top: 80px;
    padding: 0 10vw;
  }

  .hello-world__title-font {
    font-weight: normal;
    font-size: 4vmax;
  }

  .hello-world__title-animation {
    animation: show-on-load .4s ease-in;
  }

  @keyframes show-on-load {
    0% {
      opacity: 0;
      transform: scale(.5);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

</style>
