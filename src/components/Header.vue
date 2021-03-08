<template>
  <header class="header">
    <div class="container">
      <div class="header__burger">
        <div class="header__burger-item"></div>
        <div class="header__burger-item"></div>
        <div class="header__burger-item"></div>
      </div>
      <nav class="header__nav">
        <router-link
          to="/"
          class="header__nav-link"
        >
          Главная
        </router-link>
        <router-link
          to="/catalog"
          class="header__nav-link"
        >
          Каталог
        </router-link>
        <router-link
          to="/"
          class="header__nav-link header__nav-link_logo"
        >
          i-vtec
        </router-link>
        <router-link
          to="/"
          class="header__nav-link"
        >
          Оплата
        </router-link>
        <router-link
          to="/"
          class="header__nav-link"
        >
          О компании
        </router-link>
      </nav>
      <div class="header__bottom">
        <div class="header__search-mobile">
          <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.12436" cy="8.36362" r="7.86362" stroke="white" />
            <path
              d="M14.9654 16.6074L15.8615 15.8759L18.2891 18.8497C18.4911 19.0972 18.4543 19.4616 18.2068 19.6636C17.9593 19.8656 17.595 19.8287 17.393 19.5813L14.9654 16.6074Z"
              fill="white" />
          </svg>
        </div>
        <div class="header__basket">
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1H7.12245L9.37595 7.98585M9.37595 7.98585L13.2449 19.9796L29.7755 15.6939V7.12245L9.37595 7.98585Z"
              stroke="white" stroke-width="2" stroke-linecap="round" />
            <circle cx="10.7958" cy="26.102" r="3.06122" fill="white" />
            <circle cx="27.9389" cy="26.102" r="3.06122" fill="white" />
          </svg>
          <div class="header__basket-counter">0</div>
        </div>
      </div>
      <div class="header__search">
        <input type="text" class="header__search-input" placeholder="Поиск">
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    components: {}
  }
</script>

<style></style>