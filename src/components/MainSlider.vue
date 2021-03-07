<template>
  <swiper class="swiper">
    <swiper-slide 
      class='hero__slider-slide'
      :style="{'background-image': `url(${require('@/assets/img/slider/slide-1.jpg')})`}"
    >
      <div class="hero__slider-slide-container">
        <div class="hero__slider-slide-title">Оригинальные запчасти <br> по лучшим ценам</div>
        <div class="hero__slider-slide-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        dolore.</div>
        <button class="hero__slider-slide-btn btn">Каталог запчастей</button>
      </div>
    </swiper-slide>
    <swiper-slide 
      class='hero__slider-slide'
      :style="{'background-image': `url(${require('@/assets/img/slider/slide-2.jpg')})`}"
    >
      <div class="hero__slider-slide-container">
        <div class="hero__slider-slide-title">Оригинальные запчасти <br> по лучшим ценам</div>
        <div class="hero__slider-slide-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        dolore.</div>
        <button class="hero__slider-slide-btn btn">Каталог запчастей</button>
      </div>
    </swiper-slide>
    <swiper-slide 
      class='hero__slider-slide'
      :style="{'background-image': `url(${require('@/assets/img/slider/slide-3.jpg')})`}"
    >
      <div class="hero__slider-slide-container">
        <div class="hero__slider-slide-title">Оригинальные запчасти <br> по лучшим ценам</div>
        <div class="hero__slider-slide-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        dolore.</div>
        <button class="hero__slider-slide-btn btn">Каталог запчастей</button>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  export default {
    name: 'MainSlider',
    components: {
      Swiper,
      SwiperSlide
    },
    swiperOptions: {
      pagination: {
        el: '.swiper-pagination'
      },
    }
  }
</script>
