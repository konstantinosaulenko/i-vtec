<template>
  <a href="#" 
    class="card"
    :class="`${card_data.class}__card`"
  >
    <img 
      :src="require(`@/assets/img/${card_data.img}`)" 
      alt="" 
      :class="`${card_data.class}__card-img`"
    >
    <div :class="`${card_data.class}__card-title`">{{ card_data.title }}</div>
  </a>
</template>

<script>
  export default {
    name: 'Card',
    components: {},
    props: {
      card_data: {
        type: Object,
        default () {
          return {}
        }
      },
    }
  }
</script>

<style></style>