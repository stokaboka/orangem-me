<template>
  <div class="short-article__text short-article__text-font">
    <p>We are a small but brave company working in the sphere of information technology.
      Our goal is to help solve complex problems by developing information systems that are fully adapted to business requirements.</p>
    <p>And yet, we really like oranges!
      A cheerful orange fruit gives us inspiration and new ideas, as well as a charge of vigor and strength</p>
  </div>
</template>

<script>

import VendorLogo from '@/components/VendorLogo'

export default {
  name: 'orangem-about',
  components: {
    VendorLogo
  }
}
</script>

<style scoped>
  .short-article__text{
    text-align: center;
  }

  .short-article__text-font {
    font-weight: normal;
    font-size: 2rem;
  }

</style>
