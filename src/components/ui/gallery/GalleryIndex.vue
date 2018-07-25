<template>
  <div class="gallery-index">
    <div v-for="item in xItems" class="gallery-index-item"
         v-bind:key="item.id"
         v-bind:class="item.class"
         v-on:click="onClick(item)"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryIndex',
  props: {
    index: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    onClick: function (item) {
      let outItem = this.items.find(function (element) {
        return item.id === element.id
      })
      if (outItem) {
        this.$emit('galleryIndexClick', outItem)
      }
    }
  },
  computed: {
    xItems: function () {
      let out = this.items.map(function (item, index) {
        return {
          id: item.id,
          title: item.title,
          class: item.loaded ? (index === this.index ? 'gallery-index-item__top' : 'gallery-index-item__heap') : 'gallery-index-item__load'
        }
      }, this)
      return out.reverse()
    }
  }
}
</script>

<style scoped>
  .gallery-index {
    display: flex;
    flex-direction: row;
    /*flex-wrap: nowrap;*/
    /*justify-content: center;*/
    /*align-items: baseline;*/

    /*width: fit-content;*/
  }

  .gallery-index-item{
    width: 10px;
    height: 10px;
    margin: 4px;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    cursor: pointer;

    box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
  }

  .gallery-index-item__top{
    background-color: orange;
    border: 1px solid orangered;
  }

  .gallery-index-item__heap{
          background-color: #dddddd;
          border: 1px solid orangered;
        }

  .gallery-index-item__load{
    background-color: white;
    border: 1px solid #ddd;
  }

</style>
