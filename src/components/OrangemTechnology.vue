<template>
  <div>
  <article>
    <header>
      <h2 class="hello-world__article-header-font h2-decor">Front-end</h2>
    </header>
    <div class="short-article__text short-article__text-font">
      We are developing information systems on <vendor-logo vendor="opensource"/> technologies.
      Applications are created using advanced web technologies:
      <vendor-logo vendor="angularjs"/>, <vendor-logo vendor="angular"/> and now <vendor-logo vendor="vuejs"/>, <vendor-logo vendor="quasar"/>
      <p>
        We build front-end with <vendor-logo vendor="nodejs"/>, <vendor-logo vendor="webpack"/>,<vendor-logo vendor="postcss"/> and <vendor-logo vendor="babel"/>
      </p>
    </div>
  </article>

  <article>
    <header>
      <h2 class="hello-world__article-header-font h2-decor">Back-end</h2>
    </header>
    <div slot="text" class="short-article__text short-article__text-font">
      <p>
        The heart and driving force behind our projects is <vendor-logo vendor="nestjs"/>,
        <vendor-logo vendor="express"/>,
        <vendor-logo vendor="ias"/>
        running on <vendor-logo vendor="nodejs"/> under <vendor-logo vendor="docker"/> and <vendor-logo vendor="ubuntu"/>
      </p>
      <p>For data storage we use various systems:
        <vendor-logo vendor="mysql"/>, <vendor-logo vendor="mongodb"/>, <vendor-logo vendor="postgre"/>
      <p>We have experience with <span><a class="a-href-link__text" target="_blank" href="https://www.oracle.com/ru/database/index.html">Oracle Database</a></span> and <span><a class="a-href-link__text" target="_blank" href="https://www.microsoft.com/sql-server">MS-SQL Server</a></span>.</p>

    </div>
  </article>

  <article>
    <header>
      <h2 class="hello-world__article-header-font h2-decor">Big data</h2>
    </header>
    <div slot="text" class="short-article__text short-article__text-font">
      <p>
        We have experience developing an application analyzing a <span>Big Data</span>.
      </p>
      <p>
        To store and process Big Data, we used a <vendor-logo vendor="hadoop"/>.
      </p>
      <p>
        For data processing: <vendor-logo vendor="spark"/>, <vendor-logo vendor="hive"/>, <vendor-logo vendor="pig"/>
      </p>
      <p>
        To visualize the data and results of data analysis, we use web technologies. Communication with the <vendor-logo vendor="spark"/> engine is done with <vendor-logo vendor="livy"/>
      </p>
    </div>
  </article>
  </div>
</template>

<script>

import VendorLogo from '@/components/VendorLogo'

export default {
  name: 'orangem-technology',
  components: {
    VendorLogo
  }
}
</script>

<style scoped>

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
    text-align: left;
  }

  .short-article__text-font {
    font-weight: normal;
    font-size: 2rem;
  }
</style>
