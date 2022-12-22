<script>
import Header from './components/Header/Header.vue';
import BigMessage from './components/BigMessage/BigMessage.vue';

export default {
  name: "App",
  components: {
    Header,
    BigMessage
  }
}
</script>

<template>
  <Header></Header>
  <BigMessage></BigMessage>
  <div class="h-[2000px]"></div>
</template>

<style scoped>
</style>
