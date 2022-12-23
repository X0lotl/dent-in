<script>
import Header from './components/Header/Header.vue';
import BigMessage from './components/BigMessage/BigMessage.vue';
import FourIcons from './components/FourIcons/FourIcons.vue';

export default {
  name: "App",
  components: {
    Header,
    BigMessage,
    FourIcons
  }
}
</script>

<template>
  <Header></Header>
  <BigMessage></BigMessage>
  <FourIcons></FourIcons>
  <div class="h-[2000px]"></div>
</template>

<style scoped>
</style>
