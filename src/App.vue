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
  <Header v-if="$route.params.locale" />
  <div class="pt-10 h-16 " />
  <router-view :key="$route.fullPath" />
</template>
