<script>
import HeaderVue from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
export default {
  name: "App",
  components: {
    HeaderVue,
    Footer,
  },
};
</script>
<template>
  <HeaderVue v-if="$route.params.locale" />
  <div class="pt-10 h-16 "></div>
  {{ }}
  <router-view :key="$route.fullPath" />
  <Footer />
</template>
