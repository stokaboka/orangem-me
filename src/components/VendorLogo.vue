<template>
  <icon-text :icon="vendorInfo.icon">
    <span slot="text">
      <a class="a-href-link__text" target="_blank" :href="vendorInfo.href">{{vendorInfo.title}}</a>
    </span>
  </icon-text>
</template>

<script>
import IconText from '@/components/text/IconText'

const vendors = {
  angularjs: { icon: require('../../static/assets/AngularJS-Shield.svg'), href: 'https://angularjs.org', title: 'AngularJS' },
  angular: { icon: require('../../static/assets/angular.svg'), href: 'https://angular.io/', title: 'Angular' },
  vuejs: { icon: require('../../static/assets/vuejs-seeklogo.com.svg'), href: 'https://vuejs.org', title: 'VueJS' },
  nodejs: { icon: require('../../static/assets/nodejs.svg'), href: 'https://nodejs.org', title: 'Node.js' },
  webpack: { icon: require('../../static/assets/webpack-small-logo.svg'), href: 'https://webpack.js.org/', title: 'Webpack' },
  postcss: { icon: require('../../static/assets/postcss.svg'), href: 'http://postcss.org/', title: 'PostCSS' },
  babel: { icon: require('../../static/assets/babel.svg'), href: 'https://babeljs.io/', title: 'Babel' },
  ias: { icon: require('../../static/assets/ias.svg'), href: 'https://github.com/metarhia/impress', title: 'Impress Application Server (IAS)' },
  ubuntu: { icon: require('../../static/assets/ubuntu.svg'), href: 'https://www.ubuntu.com/server', title: 'Linux/Ubuntu Server' },
  mysql: { icon: require('../../static/assets/logo-mysql.svg'), href: 'https://www.mysql.com/', title: 'MySQL' },
  mongodb: { icon: require('../../static/assets/MongoDB_Gray_Logo_FullColor_RGB.svg'), href: 'https://www.mongodb.com/', title: 'MongoDB' },
  postgre: { icon: require('../../static/assets/PostgreSQL_logo.3colors.svg'), href: 'https://www.postgresql.org/', title: 'PostgreSQL' },
  hadoop: { icon: require('../../static/assets/hadoop2.png'), href: 'http://hadoop.apache.org/', title: 'Apache Hadoop' },
  spark: { icon: require('../../static/assets/spark.png'), href: 'https://spark.apache.org/', title: 'Apache Spark' },
  hive: { icon: require('../../static/assets/hive.png'), href: 'https://hive.apache.org/', title: 'Apache Hive' },
  pig: { icon: require('../../static/assets/pig.png'), href: 'https://pig.apache.org/', title: 'Apache Pig' },
  livy: { icon: require('../../static/assets/livy.png'), href: 'https://livy.incubator.apache.org/', title: 'Apache Livy' },
  opensource: { icon: require('../../static/assets/open-source.svg'), href: 'https://opensource.org/', title: 'Open Source' },
  ige: { icon: require('../../static/assets/irrelon.png'), href: 'https://www.isogenicengine.com/', title: 'Isogenic Game Engine' },
  express: { icon: require('../../static/assets/express.png'), href: 'https://expressjs.com/', title: 'Express' },
  nestjs: { icon: require('../../static/assets/nestjs.svg'), href: 'https://nestjs.com/', title: 'NestJS' },
  docker: { icon: require('../../static/assets/docker.png'), href: 'https://www.docker.com/', title: 'Docker' },
  quasar: { icon: require('../../static/assets/quasar-logo.svg'), href: 'https://quasar.dev/', title: 'Quasar Framework' }
}

const vendorsKeys = Object.keys(vendors)

export default {
  name: 'VendorLogo',
  components: {IconText},
  props: {
    vendor: {
      type: String,
      required: true,
      validator: function (value) {
        if (vendorsKeys.includes(value)) {
          return true
        } else {
          console.warn('Unknown vendor: ' + value)
          return false
        }
      }
    }
  },
  data () {
    return {
      vendors,
      unknownVendor: { icon: null, href: '', title: this.vendor }
    }
  },

  computed: {
    vendorInfo () {
      return this.vendors.hasOwnProperty(this.vendor)
        ? this.vendors[this.vendor]
        : this.unknownVendor
    }
  }
}
</script>

<style scoped>

</style>
