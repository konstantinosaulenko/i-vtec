<template>
  <div id="app">
    <Header/>

    <main>
      <section class="section catalog">
        <div class="container">
          <h2 class="section__title">Каталог</h2>
          <div class="catalog__cards cards">
            <Card
              v-for="catalogItem in catalogItems"
              :key="catalogItem.title"
              :card_data='catalogItem'
            />
          </div>
        </div>
      </section>

      <section class="section about">
        <div class="container">
          <h2 class="section__title">О нас</h2>
          <div class="about__cards cards">
            <Card
              v-for="aboutItem in aboutItems"
              :key="aboutItem.title"
              :card_data='aboutItem'
            />
          </div>
          <button class="about__btn btn">Узнать больше</button>
        </div>
      </section>

      <section class="section slogan">
        <div class="container">
          <p class="slogan__text">
            "i-vtec" - интернет-магазин, в котором можно не только ознакомиться с нашим ассортиментом, но и сделать
            покупку.
          </p>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  data() {
    return {
      catalogItems: [
        { img: 'default-image.png', title: 'Воздухозаборники', class: 'catalog' },
        { img: 'default-image.png', title: 'Интерьер', class: 'catalog' },
        { img: 'default-image.png', title: 'Колесные гайки', class: 'catalog' },
        { img: 'default-image.png', title: 'Пластины противоотливные', class: 'catalog' },
        { img: 'default-image.png', title: 'Пластины радиатора', class: 'catalog' },
        { img: 'default-image.png', title: 'Рычаги подвески', class: 'catalog' },
        { img: 'default-image.png', title: 'Усилители кузова', class: 'catalog' },
        { img: 'default-image.png', title: 'Экстерьер', class: 'catalog' },
      ],
      aboutItems: [
        { 
          img: 'about/optimal.svg', 
          title: 'Оптимальный выбор', 
          text: 'Низкие цены и широкий ассортимент', 
          count: '1', 
          class: 'about' 
        },
        { 
          img: 'about/support.svg', 
          title: 'Техническая поддержка', 
          text: 'Ответит на любой ваш вопрос', 
          count: '2', 
          class: 'about' 
        },
        { 
          img: 'about/sale.svg', 
          title: 'Скидки', 
          text: 'Для постоянных и оптовых клиентов индивидуальная скидка', 
          count: '3', 
          class: 'about' 
        },
        { 
          img: 'about/delivery.svg', 
          title: 'Быстрая доставка по России и СНГ', 
          text: 'Отправка за 24 часа', 
          count: '4', 
          class: 'about' 
        },
      ],
    }
  },
  components: {
    Header,
    Card,
    Footer
  }
}
</script>

<style></style>
