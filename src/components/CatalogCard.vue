<template>
  <div 
    class="card"
    :class="`${card_data.class}__card`"
  >
    <img 
      :src="require(`@/assets/img/${card_data.img}`)"  
      :class="`${card_data.class}__card-img`"
    >
    <div :class="`${card_data.class}__card-top`">
      <div :class="`${card_data.class}__card-title`">{{ card_data.title }}</div>
      <div :class="`${card_data.class}__card-price`">{{ card_data.price }}</div>
    </div>
    <div :class="`${card_data.class}__card-quantity`">{{ card_data.quantity }}</div>
      <div :class="`${card_data.class}__card-article`">{{ card_data.article }}</div>
      <div class="catalog__card-basket">
        <div class="catalog__card-basket-counter">
          <div 
            class="catalog__card-basket-counter-btn catalog__card-basket-counter-btn_prev"
            @click="decrementCounter"
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 13L2 7.10526L6 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="catalog__card-basket-counter-number">{{ counter }}</div>
          <div 
            class="catalog__card-basket-counter-btn catalog__card-basket-counter-btn_next"
            @click="incrementCounter"
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L5 7.10526L0.999998 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <button 
          class="catalog__card-basket-btn btn"
          @click="addToCart"
        >
          В корзину
        </button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogCard',
    data() {
      return {
        counter: 1,
      }
    },
    components: {},
    props: {
      card_data: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    methods: {
      decrementCounter() {
        this.counter > 1 ? this.counter-- : this.counter
      },
      incrementCounter() {
        this.counter++
      },
      addToCart(event) {
        event.target.classList.add('catalog__card-basket-btn_active');
        event.target.textContent = 'В корзине';
      },
    },
  }
</script>

<style></style>