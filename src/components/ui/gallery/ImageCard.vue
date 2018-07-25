<template>
  <div class="card drop-shadow"
       v-cloak
       v-bind:style="style"
       v-on:click="onClick($event)">
      <img v-bind:src="item.url" class="card-image" v-on:load="imgLoaded"/>
    <span class="card-title" v-html="item.title"></span>
  </div>
</template>

<script>
// v-show="loaded"
export default {
  name: 'image-card',

  data: function () {
    return {
      top: false,
      loaded: false,
      style: {},
      animationStyles: [],
      amplitudeFlying: 2000,
      toTopStyle: { transform: 'rotateX(20deg) rotateZ(-15deg)  translateX(500px)  scale(0.75)', 'z-index': 0 },
      topStyle: { transform: 'rotateX(0deg) rotateZ(0deg) translateX(0px) translateY(50px) scale(1)', 'z-index': 1 },
      // topZeroStyle: { transform: 'translateX(0px) translateY(50px)', 'z-index': 1 },
      toHeapStyle: { transform: 'rotateX(20deg) rotateZ(-15deg) translateX(-500px)  scale(0.75)', 'z-index': 1 },
      preLoadStyle: this.generatePreLoadStyle(),
      heapStyle: this.generateTransformStyleForItem()
    }
  },

  mounted: function () {
    this.$el.addEventListener('animationend', this.onAnimationEndHandler)
    this.$el.addEventListener('transitionend', this.onAnimationEndHandler)

    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize(null)
    this.preLoadStyle = this.generatePreLoadStyle()

    if (this.loaded) {
      this.style = this.top ? this.topStyle : this.heapStyle
    } else {
      this.style = this.preLoadStyle
    }
  },

  props: {

    idGallery: {
      type: Number,
      default: 0
    },
    isFirst: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: function () {
        return {id: 0, title: '', url: '', top: false}
      }
    }

  },

  watch: {
    item: function (val, oldVal) {
      if (!val.top && this.top) {
        this.setHeapAnimation()
        this.top = val.top
      }
      if (val.top && !this.top) {
        this.setTopAnimation()
        this.top = val.top
      }
    }
  },

  methods: {

    onWindowResize: function (event) {
      let intViewportWidth = event ? event.target.innerWidth : window.innerWidth

      this.amplitudeFlying = Math.round(intViewportWidth / 2)
      this.toTopStyle = { transform: `rotateX(20deg) rotateZ(-15deg)  translateX(${this.amplitudeFlying}px)  scale(0.75)`, 'z-index': 0 }
      this.toHeapStyle = { transform: `rotateX(20deg) rotateZ(-15deg) translateX(-${this.amplitudeFlying}px)  scale(0.75)`, 'z-index': 1 }
    },

    getRandomOfBaseValue: (base, borders) => {
      return base + Math.round((0.5 - Math.random()) * borders * 2)
    },

    generateTransformStyleForItem: function () {
      let transform = [
        'rotateX(45deg)',
        'rotateZ(' + this.getRandomOfBaseValue(-30, 20) + 'deg)',
        'translateX(' + this.getRandomOfBaseValue(0, 50) + 'px)',
        'translateY(' + (this.getRandomOfBaseValue(0, 50) + 20) + 'px)',
        'scale(0.75)'
      ]
      return {
        transform: transform.join(' ')
      }
    },

    generatePreLoadStyle: function () {
      let _amplitudeFlying = this.amplitudeFlying * 2
      let _sideFlying = this.item.id % 2 === 0 ? _amplitudeFlying : -_amplitudeFlying
      return {
        transform: `translateX(${_sideFlying}px)`
      }
    },

    onAnimationEndHandler: function () {
      this.nextAnimation()
    },

    onClick: function (event) {
      if (event.offsetX < this.$el.clientWidth / 2) {
        this.$emit('positionImageCardClick', 'L')
      } else {
        this.$emit('positionImageCardClick', 'R')
      }
      this.$emit('imageCardClick', this.item)
    },

    imgLoaded: function () {
      this.loaded = true
      this.style = this.top ? this.topStyle : this.heapStyle
      this.$emit('imageCardLoaded', this.item)
    },

    setHeapAnimation: function () {
      if (this.isFirst) {
        this.playAnimations([this.heapStyle])
      } else {
        this.playAnimations([this.toHeapStyle, this.heapStyle])
      }
    },

    setTopAnimation: function () {
      if (this.isFirst) {
        this.playAnimations([this.topStyle])
      } else {
        this.playAnimations([this.toTopStyle, this.topStyle])
      }
    },

    playAnimations: function (aStyles) {
      this.animationStyles = aStyles
      this.nextAnimation()
    },

    nextAnimation: function () {
      if (this.animationStyles.length > 0) {
        this.style = this.animationStyles.shift()
        return true
      } else {
        return false
      }
    }
  }

}
</script>

<style scoped>

  .card {
    position: absolute;
    padding: 10px 10px 10px 10px;
    border: 1px solid #CCC;
    background: white;
  }

  .card-image {
    width: 100%;
    height: 100%;
    border: 1px solid #CCC;
  }

  .drop-shadow {
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ;
  }

  img.v-enter, img.v-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  [v-cloak] {
    display: none
  }

</style>
