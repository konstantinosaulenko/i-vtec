<template>
  <a href="#" 
    class="card"
    :class="`${card_data.class}__card`"
  >
    <div :class="`${card_data.class}__card-top`">
      <img 
        :src="require(`@/assets/img/${card_data.img}`)"  
        :class="`${card_data.class}__card-img`"
      >
      <div :class="`${card_data.class}__card-title`">{{ card_data.title }}</div>
    </div>
    <div
      v-if="card_data.text" 
      :class="`${card_data.class}__card-text`"
    >
      {{ card_data.text }}
    </div>
    <div
      v-if="card_data.count" 
      :class="`${card_data.class}__card-count`"
    >
      {{ card_data.count }}
    </div>
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