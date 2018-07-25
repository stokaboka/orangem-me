<template>
<div v-html=""></div>
</template>

<script>
export default {
  name: 'OrangemDoc',
  props: {
    docURL: {
      type: String,
      default: ''
    },
    anchors: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
