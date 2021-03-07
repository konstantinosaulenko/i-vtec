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
      ]
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
