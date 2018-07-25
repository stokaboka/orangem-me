<template>
  <div id="app">
    <orangem-toolbar/>
    <router-view/>
    <orangem-footer/>
  </div>
</template>

<script>
/*
¯\_(ツ)_/¯
 */
import Logo from './components/Logo'
import Toolbar from './components/Toolbar'
import OrangemFooter from './components/ui/Footer'

export default {
  name: 'App',
  components: {
    OrangemFooter,
    'orangem-logo': Logo,
    'orangem-toolbar': Toolbar
  },
  data () {
    return {
      home: true
    }
  },
  mounted: function () {
    this.setState(this.$route.path)
  },
  methods: {
    setState: function (cState) {
      this.home = cState === '/'
    }
  },

  watch: {
    '$route.path': function (val) {
      this.setState(val)
    }
  }
}
</script>

<style>

  html {
    font-size: 1vmax;
    color: #222222;
  }

  body {
    background-color:  whitesmoke;
    margin: 0;
  }

#app {
  /*margin: 0;*/
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #304a4b;
  margin: 0 auto;
  /*padding-top: 100px;*/
  /*margin-top: 94px;*/
}
.logo__text {
  font-weight: bold;
  color: orangered;
}

  q {
    quotes: "\00ab" "\00bb";
  }

  .a-href-link__text {
    text-decoration: none;
    color: #333333;
    border-bottom: 2px solid #ff9a00;
    display: inline-block;
    line-height: 0.9;
    text-shadow:
      1px 1px whitesmoke,
      1px -1px whitesmoke,
      -1px 1px whitesmoke,
      -1px -1px whitesmoke;
  }

  .drop-shadow__gray-down {
    box-shadow: 0px 1px 1px 1px rgba(102, 102, 102, 1);
  }

  .root-container {
    padding: 0 1rem 3rem 1rem;
  }

  .h1-decor{
    margin-top: 8rem;
    border-bottom: orangered 0.2rem solid;
    padding-left: 1vmax;

    background-color: orangered;
    color: white;

    padding: 1rem 2rem;
  }

  .hello-world__article-header-font {
    text-align: left;
    font-weight: normal;
  }

</style>
