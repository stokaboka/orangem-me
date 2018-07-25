<template>
  <transition appear>
    <img class="logo logo__img"
         v-bind:style="style"
         v-bind:class="{ 'animation-snake': animationSnake }"
         :src="logo"
    >
  </transition>
</template>

<script>

export default {
  name: 'orangem-logo',

  props: {
    logo: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 300,
      required: false
    }
  },

  data () {
    return {
      animationDelay: {random: 20000, fixed: 10000},
      animationOnLoad: true,
      animationSnake: false,
      logoSize: 300
    }
  },
  computed: {
    style: function () {
      return {
        height: this.logoSize + 'px',
        width: this.logoSize + 'px'
      }
    }
  },
  mounted: function () {
    if (this.size) {
      this.logoSize = this.size
    }
    this.startRandomAnimationTimeout()
  },
  methods: {

    startSnakeAnimation: function () {
      this.animationSnake = true
      setTimeout(this.stopSnakeAnimation, 3200)
    },

    stopSnakeAnimation: function () {
      this.animationSnake = false
      this.startRandomAnimationTimeout()
    },

    startRandomAnimationTimeout: function () {
      setTimeout(this.startSnakeAnimation, Math.round(Math.random() * this.animationDelay.random + this.animationDelay.fixed))
    }

  }

}
</script>

<style scoped>

  .logo {
  }

  .logo__img  {
  }
  .logo__img:hover {
    animation: shake 0.3s linear;
    animation-iteration-count: 1;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave {
    opacity: 1;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 750ms ease-in-out
  }

  .animation-shake {
    animation: shake 0.3s linear;
    animation-iteration-count: 2;
  }

  @keyframes shake {
    from {
      transform: rotate3d(0, 0, 1, 0deg);
    }

    50% {
      transform: rotate3d(0, 0, 1, -6deg);
    }

    25%,
    75% {
      transform: rotate3d(0, 0, 1, 4deg);
    }

    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }

</style>
