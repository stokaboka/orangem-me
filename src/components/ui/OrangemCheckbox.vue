<template>
  <label class="checkbox">
    <input type="checkbox"
           v-bind:value="value"
           v-bind:checked="checked"
           v-on:input="onChange($event)"
    />
    <div class="checkbox__text">{{value}}</div>
  </label>
</template>

<script>

export default {
  name: 'OrangemCheckbox',
  props: {
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange: function (event) {
      this.$emit('input', event.target.checked ? this.value : '')
      this.$emit('changed', event.target.checked)
    }
  }
}
</script>

<style scoped>
  /* Cначала обозначаем стили для IE8 и более старых версий
  т.е. здесь мы немного облагораживаем стандартный чекбокс. */
  .checkbox {
    vertical-align: top;
    width: 17px;
    height: 17px;
    margin: 0 3px 0 0;
  }

/* Это для всех браузеров, кроме совсем старых, которые не поддерживают
селекторы с плюсом. Показываем, что label кликабелен.*/

.checkbox + label {
    cursor: pointer;
  }

  /* Далее идет оформление чекбокса в современных браузерах, а также IE9 и выше.
  Благодаря тому, что старые браузеры не поддерживают селекторы :not и :checked,
  в них все нижеследующие стили не сработают. В данном случае checked указывается
  без двоеточия впереди, почему-то это срабатывает именно так.*/

  .checkbox input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 20px;
  }
  .checkbox__text {
    position: relative;
    padding: 0 0 0 60px;
    cursor: pointer;
  }
  .checkbox__text:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #CDD1DA;
    box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
    transition: .2s;
  }
  .checkbox__text:after {
    content: '';
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    transition: .2s;
  }
  .checkbox input:checked + .checkbox__text:before {
    /*background: #9FD468;*/
    background: #ff9a00;
  }
  .checkbox input:checked + .checkbox__text:after {
    left: 26px;
  }
  .checkbox input:focus + .checkbox__text:before {
    /*box-shadow: inset 0 2px 3px rgba(0,0,0,.2), 0 0 0 3px rgba(255,255,0,.7);*/
    box-shadow: inset 0 2px 3px rgba(0,0,0,.2), 0 0 1px 1px rgba(255,69,0,0.7);
  }

</style>
