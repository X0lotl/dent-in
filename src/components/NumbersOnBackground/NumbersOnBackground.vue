<script>
import Number from "./Number.vue";

export default {
  name: "NumbersOnBackground",
  components: {
    Number,
}, props: {
    numbersOnBackgroundData: Array
  }, setup(props) {
    const numbersOnBackgroundData = props.numbersOnBackgroundData;
    return {numbersOnBackgroundData};
  }
};
</script>
<template>
  <div id="background" class="">
    <div
      class="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-36"
    >
      <Number v-for="numberData in numbersOnBackgroundData" :numberData="numberData"></Number>
    </div>
  </div>
</template>
<style scoped>
#background {
  background-image: url("../../assets/background.jpg");
  background-attachment: fixed;
  background-position: 49.31% 52.43%;
}
</style>
