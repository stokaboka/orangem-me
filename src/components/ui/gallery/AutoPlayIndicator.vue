<template>
    <div class="autoplay__indicator">

      <orangem-checkbox
        v-bind:value="checkbox_value"
        v-bind:checked="value"
        v-on:changed="onCheckboxChanged"
      ></orangem-checkbox>

        <div v-for="led in leds"
             v-show="false"
             class="autoplay__indicator-led"
             v-bind:key="led.index"
             v-bind:class="led.class">
        </div>
    </div>
</template>

<script>
import OrangemCheckbox from '@/components/ui/OrangemCheckbox'
export default {
  name: 'AutoPlayIndicator',
  components: {OrangemCheckbox},
  props: {
    title: {
      type: String,
      default: 'autoplay'
    },
    value: {
      type: Boolean,
      default: false
    },
    clicks: {
      type: Number,
      default: 0
    },
    maxClicks: {
      type: Number,
      default: 3
    }
  },
  data: function () {
    return {
      checkbox_value: '',
      leds: [],
      onLed: 'green',
      offLed: 'gray'
    }
  },
  mounted: function () {
    this.checkbox_value = this.title
    this.draw()
  },
  watch: {
    value: function (val) {
      this.draw()
    },
    clicks: function (val) {
      this.draw()
    }
  },
  computed: {
    valueDisplay: function () {
      return this.value ? 'ON' : 'OFF'
    },
    indicatorTextClass: function () {
      return this.value ? 'autoplay__indicator-text__on' : 'autoplay__indicator-text__off'
    }
  },
  methods: {
    onCheckboxChanged: function (value) {
      this.$emit('autoPlayIndicatorClick', value)
    },
    onClick: function () {
      // this.$emit('autoPlayIndicatorClick')
    },
    getLedClass: function (i) {
      if (this.value) {
        return 'autoplay__indicator-led__autoplay'
      } else {
        return i < this.clicks ? 'autoplay__indicator-led__on' : 'autoplay__indicator-led__off'
      }
    },
    draw: function () {
      this.leds = new Array(this.maxClicks)
      for (let i = 0; i < this.maxClicks; i++) {
        this.leds[i] = {
          index: i,
          class: this.getLedClass(i)
        }
      }
    }
  }
}
</script>

<style scoped>
  .autoplay__indicator {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;

    width: fit-content;

    cursor: pointer;
  }

  .autoplay__indicator-text{
    font-size: 1rem;
  }

  .autoplay__indicator-text__off {
    color: #7f7f7f;
  }

  .autoplay__indicator-text__on {
    color: black;
  }

  .autoplay__indicator-led {
    display: block;
    align-self: baseline;
    margin: 3px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
  }

  .autoplay__indicator-led__on {
    background-color: orange;
  }
  .autoplay__indicator-led__autoplay {
    background-color: green;
  }
  .autoplay__indicator-led__off {
    background-color: lightgray;
  }

  .drop-shadow {
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ;
  }

</style>
