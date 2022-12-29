<script>
import Header from "./components/Header/Header.vue";
import uaJson from "./assets/uk.json"
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      data: uaJson,
      locale: "uk",
    };
  },
};
</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
</template>
