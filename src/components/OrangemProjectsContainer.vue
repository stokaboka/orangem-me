<template>
  <div>
    <header>
      <h1 class="hello-world__article-header-font h1-decor">Projects</h1>
    </header>
  <orangem-projects></orangem-projects>
  </div>
</template>

<script>
import OrangemProjects from '@/components/OrangemProjects'

export default {
  name: 'OrangemProjectsContainer',
  components: {OrangemProjects}
}
</script>

<style scoped>

</style>
