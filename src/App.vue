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
  <Header v-if="$route.params.locale"></Header>
  <div class="pt-10 h-16 "></div>
  <router-view :key="$route.fullPath"></router-view>
</template>
