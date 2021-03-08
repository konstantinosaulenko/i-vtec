<template>
  <div id="app">
    <MobileMenu/>
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu';

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    MobileMenu
  }
}
</script>

<style></style>
