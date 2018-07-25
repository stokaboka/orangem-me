<template>
    <div class="short-article short-article__spaces-normal">
      <slot name="icon" ></slot>
      <slot name="text" ></slot>
    </div>
</template>

<script>

export default {
  name: 'short-article',
  props: {
    article: {
      type: Object,
      default: function () {
        return {
          id: 'article',
          icon: '',
          html: 'We are champions!',
          class: ''
        }
      },
      required: false
    }
  }
}
</script>

<style scoped>
.short-article {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: white;
}

.short-article__size-auto{
  margin: 0 auto;
}

.short-article__size-100pc{
  width: 100%;
  margin: 0 auto;
}

.short-article__size-75pc{
  width: 75%;
  margin: 0 auto;
}

.short-article__size-50pc {
  width: 50%;
  margin: 0 auto;
}

.short-article__border-none {
  border: none;
}

.short-article__border-thin {
  border: #c6c6c6 solid 1px;
}

.short-article__spaces-normal {
  /*margin: 5px;*/
  padding: 1em;
}

.short-article__paragraph-left {
text-align: left;
}

.drop-shadow {
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

</style>
