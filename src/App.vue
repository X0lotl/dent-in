<script>
import Header from "./components/Header/Header.vue";
export default {
  name: "App"
};
</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
</template>
