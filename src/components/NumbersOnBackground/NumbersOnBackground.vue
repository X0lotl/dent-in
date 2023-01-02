<script>
import axios from "axios";
import Number from "./Number.vue";

export default {
  name: "NumbersOnBackground",
  components: {
    Number,
  },
  data() {
    return {
      numbersOnBackgroundData: "",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/numbers-on-background`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then((res) => (this.numbersOnBackgroundData = res.data.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div id="background" class="">
    <div
      class="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-36"
      v-if="this.numbersOnBackgroundData"
    >
      <Number
        v-for="numberData in this.numbersOnBackgroundData"
        :numberData="numberData"
      ></Number>
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
