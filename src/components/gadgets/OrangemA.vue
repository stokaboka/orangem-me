<template>
    <a v-bind:href="href" target="_blank" class="a-href-link__text">{{href}}<slot></slot></a>
</template>

<script>
export default {
  name: 'orangem-a',
  props: {
    href: {
      type: String,
      default: function () {
        return '/'
      }
    }
  }
}
</script>

<style scoped>
</style>
