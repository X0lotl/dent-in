<script>
import Header from './components/Header/Header.vue';
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>
<template>
  <Header></Header>
  <div class="pt-10"></div>
  <router-view :key="$route.fullPath"></router-view>
</template>
