<template>
  <div class="scene scene__size">
    <div class="gallery-header" v-if="xItems.length > 1">
      <auto-play-indicator
        v-bind:value="autoPlay"
        v-bind:clicks="autoPlayClickCounter"
        v-bind:max-clicks="clicksForAutoPlay"
        v-on:autoPlayIndicatorClick="onAutoPlayIndicatorClick"
      >
      </auto-play-indicator>
      <gallery-index
        v-bind:items="xItems"
        v-bind:index="selectedIndex"
        v-on:galleryIndexClick="onIndexClick"
        class="gallery-index__position"
      >
      </gallery-index>
    </div>
    <!--<span v-html="title"></span>-->
    <div class="gallery-card-container">
      <image-card v-for="(item, index) in xItems"
                v-bind:key="item.id"
                v-bind:id-gallery="id"
                v-bind:item="item"
                v-bind:is-first="index === xItems.length-1"
                v-on:positionImageCardClick="onPositionImageCardClick"
                v-on:imageCardClick="onClick"
                v-on:imageCardLoaded="onImageCardLoaded"
                class="gallery-card gallery-card__size">
      </image-card>
    </div>
  </div>
</template>

<script>
import {isMobileDevice} from '../../api'
import ImageCard from './ImageCard'
import AutoPlayIndicator from './AutoPlayIndicator'
import GalleryIndex from './GalleryIndex'

export default {
  name: 'photos-on-table-gallery',
  components: {GalleryIndex, AutoPlayIndicator, ImageCard},
  props: {
    id: {
      type: Number,
      default: 0
    },

    title: {
      type: String,
      default: ''
    },

    items: {
      type: Array,
      default: function () {
        return []
      }
    },

    sortBy: {
      type: String,
      default: ''
    },

    sortDirection: {
      type: String,
      default: 'ASC'
    }
  },

  mounted: function () {
    this.xItems = this.prepareItems()
  },

  data: function () {
    return {
      selectedItem: null,
      selectedIndex: -1,
      clickPosition: 'R',
      autoPlay: false,
      autoPlayTimer: null,
      autoPlayTimeout: 2000,
      autoPlayClickCounter: 0,
      clicksForAutoPlay: 3,
      xItems: []
    }
  },
  watch: {
    items: function (val, oldVal) {
      this.xItems = this.prepareItems()
    }
  },
  methods: {

    onPositionImageCardClick: function (pos) {
      this.clickPosition = pos
    },

    onImageCardLoaded: function (item) {
      this.xItems = this.xItems.map(
        function (element) {
          if (element.id === item.id) {
            return Object.assign(element, {loaded: true})
          } else {
            return element
          }
        },
        this
      )
    },

    onClick: function (item) {
      if (this.autoPlay) {
        this.stopAutoPlay()
      } else {
        if (item.top) {
          this.swapItems(false)
        } else {
          this.itemToTop(item)
        }
      }

      if (this.clicksForAutoPlay === ++this.autoPlayClickCounter) {
        this.startAutoPlay()
      }
    },

    onIndexClick: function (item) {
      if (this.autoPlay) {
        this.stopAutoPlay()
      }
      this.itemToTop(item)
    },

    calcNextIndex: function (index) {
      if (this.clickPosition === 'R') {
        return index - this._sortDirection
      } else {
        return index + this._sortDirection
      }
    },

    getNextIndex: function (index, aLength) {
      let out = -1
      if (aLength > 0) {
        out = this.calcNextIndex(index)

        if (out < 0) {
          out = aLength - 1
        }
        if (aLength <= out) {
          out = 0
        }
      }
      return out
    },

    getNextItem: function (item) {
      if (item) {
        let idx = this.getItemIndex(item)
        let nextIdx = this.calcNextIndex(idx)
        if (!this.autoPlay) {
          if (nextIdx < 0) {
            nextIdx = this.xItems.length - 1
          }
          if (nextIdx >= this.xItems.length) {
            nextIdx = 0
          }
        }

        if (nextIdx >= 0 && nextIdx < this.xItems.length) {
          return this.xItems[nextIdx]
        } else {
          return null
        }
      } else {
        return null
      }
    },

    getItemIndex: function (item) {
      return this.xItems.findIndex(function (element) {
        return element.id === item.id
      })
    },

    getItemOnTop: function () {
      return this.xItems.find(function (element) {
        return !!element.top
      })
    },

    getIndexOnTop: function () {
      return this.xItems.findIndex(function (element) {
        return !!element.top
      })
    },

    updateItems: function (item) {
      return this.xItems.map(function (element, index, arr) {
        if (element.id === item.id) {
          return Object.assign({}, element, {top: item.top})
        } else {
          if (element.top) {
            return Object.assign({}, element, {top: false})
          }
        }
        return element
      }, this)
    },

    swapItems: function (resumeAutoplay) {
      let nextItem = this.getNextItem(this.selectedItem)

      this.itemToHeap(this.selectedItem)

      if (nextItem) {
        this.itemToTop(nextItem)
      } else {
        this.selectedItem = null
        this.selectedIndex = -1
      }
    },

    nextItem: function () {
      if (this.autoPlay) {
        if (this.autoPlayTimer) {
          if (this.selectedItem) {
            this.swapItems(false)
          } else {
            this.stopAutoPlay()
          }
        }
      } else {
        if (this.autoPlayTimer) {
          clearInterval(this.autoPlayTimer)
        }
      }
    },

    itemTo: function (item, top) {
      if (item) {
        this.xItems = this.updateItems(Object.assign({}, item, {top: top}))
        return true
      }
      return false
    },

    itemToTop: function (item) {
      if (this.itemTo(item, true)) {
        this.selectedItem = this.getItemOnTop()
        this.selectedIndex = this.getIndexOnTop()
      }
    },

    itemToHeap: function (item) {
      this.itemTo(item, false)
    },

    prepareItems: function (items) {
      if (this.items) {
        let out = this.items.map(
          function (item) {
            return Object.assign({}, {top: false, loaded: false}, item)
          },
          this
        )

        if (isMobileDevice()) {
          out = out.filter(
            function (item) {
              return item.mobile
            }
          )
        }

        if (this.sortBy) {
          out.sort(this.sortItems)
        }

        return out
      } else {
        return []
      }
    },

    sortItems: function (a, b) {
      if (a[ this.sortBy ] < b[ this.sortBy ]) {
        return 1 * this._sortDirection
      } else if (a[ this.sortBy ] > b[ this.sortBy ]) {
        return -1 * this._sortDirection
      } else {
        return 0
      }
    },

    startAutoPlay: function () {
      let self = this
      if (this.selectedItem) {
        this.swapItems(true)
      } else {
        // last item of array on top heap
        this.itemToTop(this.xItems[this.xItems.length - 1])
      }
      this.autoPlay = true
      this.autoPlayTimer = setInterval(function () {
        self.nextItem()
      }, this.autoPlayTimeout)
    },

    stopAutoPlay: function () {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer)
      }
      this.autoPlay = false
      this.autoPlayClickCounter = 0
    },

    onAutoPlayIndicatorClick: function (value) {
      if (value !== this.autoPlay) {
        if (this.autoPlay) {
          this.stopAutoPlay()
        } else {
          this.startAutoPlay()
        }
      }
    }

  },

  computed: {
    _sortDirection: function () {
      if (this.sortDirection.toUpperCase() === 'ASC') {
        return -1
      } else {
        return 1
      }
    }
  }
}
</script>

<style scoped>

  .scene {
    /*position: relative;*/
    /*width: 50%;*/
    /*height: auto;*/
  }

  .gallery-card {
    transition: transform 0.5s;
    z-index: 0;
    cursor: pointer;
  }

  .scene__size {
    /*perspective: 1500px;*/
  }

  .gallery-card-container {
    position: relative;
    left: 50%;
    margin-left: -30%;
    perspective: 2000px;
    width: 80%;
  }

  .gallery-card__size {
    width: 1000px;
  }

  .gallery-header {
    display: flex;
    flex-direction: row;
    /*flex-wrap: nowrap;*/
    justify-content: center;
    /*align-items: flex-end;*/

    /*width: 150%;*/

    margin: 1px auto 1px auto;
  }

  .gallery-index__position {
    margin-left: 10rem;
  }

  @media screen and (max-width: 1920px) {
    .gallery-card-container {
      perspective: 2000px;
    }

    .gallery-card__size {
      width: 1000px;
    }

  }

  @media screen and (max-width: 1680px) {
    .gallery-card-container {
      perspective: 1700px;
    }

    .gallery-card__size {
      width: 850px;
    }

  }

  @media screen and (max-width: 1440px) {
    .gallery-card-container {
      perspective: 1500px;
    }

    .gallery-card__size {
      width: 750px;
    }

  }

  @media screen and (max-width: 1280px) {
    .gallery-card-container {
      perspective: 1300px;
    }

    .gallery-card__size {
      width: 650px;
    }

  }

  @media screen and (max-width: 1024px) {
    .gallery-card-container {
      perspective: 1100px;
    }

    .gallery-card__size {
      width: 550px;
    }

  }

  @media screen and (max-width: 900px) {
    .gallery-card-container {
      perspective: 1000px;
    }

    .gallery-card__size {
      width: 500px;
    }

  }

  @media screen and (max-width: 800px) {
    .gallery-card-container {
      perspective: 900px;
    }

    .gallery-card__size {
      width: 450px;
    }

  }

  @media screen and (max-width: 600px) {
    .gallery-card-container {
      perspective: 700px;
    }

    .gallery-card__size {
      width: 400px;
    }

  }
</style>
