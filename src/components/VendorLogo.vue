<template>
  <icon-text :icon="vendorInfo.icon">
    <span slot="text">
      <a class="a-href-link__text" target="_blank" :href="vendorInfo.href">{{vendorInfo.title}}</a>
    </span>
  </icon-text>
</template>

<script>

import IconText from '@/components/text/IconText'
export default {
  name: 'VendorLogo',
  components: {IconText},
  props: {
    vendor: {
      type: String,
      required: true,
      validator: function (value) {
        switch (value) {
          case 'angularjs':
          case 'angular':
          case 'vuejs':
          case 'nodejs':
          case 'webpack':
          case 'postcss':
          case 'babel':
          case 'ias':
          case 'ubuntu':
          case 'mysql':
          case 'mongodb':
          case 'postgre':
          case 'hadoop':
          case 'spark':
          case 'hive':
          case 'pig':
          case 'livy':
          case 'opensource':
          case 'ige':
            return true
          default:
            console.warn('Unknown vendor: ' + value)
            return false
        }
      }
    }
  },
  data () {
    return {
      vendors: {
        angularjs: { icon: require('../assets/AngularJS-Shield.svg'), href: 'https://angularjs.org', title: 'AngularJS' },
        angular: {icon: require('../assets/angular.svg'), href: 'https://angular.io/', title: 'Angular'},
        vuejs: { icon: require('../assets/vuejs-seeklogo.com.svg'), href: 'https://vuejs.org', title: 'VueJS' },
        nodejs: { icon: require('../assets/nodejs.svg'), href: 'https://nodejs.org', title: 'Node.js' },
        webpack: { icon: require('../assets/webpack-small-logo.svg'), href: 'https://webpack.js.org/', title: 'Webpack' },
        postcss: { icon: require('../assets/postcss.svg'), href: 'http://postcss.org/', title: 'PostCSS' },
        babel: { icon: require('../assets/babel.svg'), href: 'https://babeljs.io/', title: 'Babel' },
        ias: { icon: require('../assets/ias.svg'), href: 'https://github.com/metarhia/impress', title: 'Impress Application Server (IAS)' },
        ubuntu: { icon: require('../assets/ubuntu.svg'), href: 'https://www.ubuntu.com/server', title: 'Linux/Ubuntu Server' },
        mysql: { icon: require('../assets/logo-mysql.svg'), href: 'https://www.mysql.com/', title: 'MySQL' },
        mongodb: { icon: require('../assets/MongoDB_Gray_Logo_FullColor_RGB.svg'), href: 'https://www.mongodb.com/', title: 'MongoDB' },
        postgre: { icon: require('../assets/PostgreSQL_logo.3colors.svg'), href: 'https://www.postgresql.org/', title: 'PostgreSQL' },
        hadoop: { icon: require('../assets/hadoop2.png'), href: 'http://hadoop.apache.org/', title: 'Apache Hadoop' },
        spark: { icon: require('../assets/spark.png'), href: 'https://spark.apache.org/', title: 'Apache Spark' },
        hive: { icon: require('../assets/hive.png'), href: 'https://hive.apache.org/', title: 'Apache Hive' },
        pig: { icon: require('../assets/pig.png'), href: 'https://pig.apache.org/', title: 'Apache Pig' },
        livy: { icon: require('../assets/livy.png'), href: 'https://livy.incubator.apache.org/', title: 'Apache Livy' },
        opensource: { icon: require('../assets/open-source.svg'), href: 'https://opensource.org/', title: 'Open Source' },
        ige: { icon: require('../assets/irrelon.png'), href: 'https://www.isogenicengine.com/', title: 'Isogenic Game Engine' }
      },

      unknownVendor: { icon: null, href: '', title: this.vendor }
    }
  },

  computed: {
    vendorInfo () {
      if (this.vendors.hasOwnProperty(this.vendor)) {
        return this.vendors[this.vendor]
      } else {
        return this.unknownVendor
      }
    }
  }
}
</script>

<style scoped>

</style>
