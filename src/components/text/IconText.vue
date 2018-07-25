<template>
  <div class="icon-text-container"><img class="icon-text__icon" :src="icon"/>
    <slot name="text" ></slot>
  </div>
</template>

<script>
export default {
  name: 'icon-text',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .icon-text-container {
    display: inline-block;
  }
  .icon-text__icon {
    display: inline-block;
    height: 2rem;
    width: auto;
    margin-left: 0.25vw;
    margin-right: 0.25vw;
  }
</style>
