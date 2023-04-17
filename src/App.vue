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
  <Suspense class="min-h-10">
    <HeaderVue v-if="$route.params.locale" />
  </Suspense>
  <div class="pt-10 h-16 "></div>
  <div class="min-h-[110vh]">
    <router-view :key="$route.fullPath" />
  </div>
  <Footer />
</template>
