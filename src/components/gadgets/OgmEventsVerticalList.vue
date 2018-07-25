<template>
  <div class="events-list-vertical__container">
    <div class="events-list-vertical__line">
    </div>
    <div v-for="event in events" :key="event.id" class="events-list-vertical-event__container">
      {{event.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ogm-events-vertical-list',
  props: {
    events: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .events-list-vertical__container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .events-list-vertical__line{
    display: block;
    width: 10px;
    height: 100%;
    background-color: #006666;
  }
  .events-list-vertical-event__container{
    display: inline-block;
  }
</style>
