<template>
  <section class="section catalog catalog-page">
    <div class="container">
      <div class="catalog__cards cards">
        <CatalogCard
          v-for="catalogItem in catalogItems"
          :key="catalogItem.title"
          :card_data='catalogItem'
        />
      </div>

      <div class="pagination">
        <div class="container">
          <div class="pagination__items">
            <button class="pagination__item pagination__item_active">1</button>
            <button class="pagination__item">2</button>
            <button class="pagination__item">3</button>
            <button class="pagination__item pagination__item_separator">...</button>
            <button class="pagination__item">5</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CatalogCard from '@/components/CatalogCard'
export default {
  name: 'CatalogPage',
  data() {
    return {
      catalogItems: [
        { 
          img: 'default-image.png', 
          title: 'Винт Mercury 6-15 (3х9 1/4х9") (POLASTORM)',  
          price: '4 000 ₽',
          quantity: 'Есть в наличии 20 шт.',
          article: 'Арт: 48-42522A12-PS',
          class: 'catalog'
        },
        { 
          img: 'default-image.png', 
          title: 'Винт Mercury 6-15 (3х9 1/4х9")',  
          price: '4 000 ₽',
          quantity: 'Есть в наличии 20 шт.',
          article: 'Арт: 48-42522A12-PS',
          class: 'catalog'
        },
        { 
          img: 'default-image.png', 
          title: 'Винт Mercury 6-15 ',  
          price: '4 000 ₽',
          quantity: 'Есть в наличии 20 шт.',
          article: 'Арт: 48-42522A12-PS',
          class: 'catalog'
        },
        { 
          img: 'default-image.png', 
          title: 'Винт Mercury ',  
          price: '4 000 ₽',
          quantity: 'Есть в наличии 20 шт.',
          article: 'Арт: 48-42522A12-PS',
          class: 'catalog'
        },
      ]
    }
  },
  components: {
    CatalogCard
  }
}
</script>