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
      imgSrc: "",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/numbers-on-background`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then(
        (res) => (
          (this.numbersOnBackgroundData = res.data.data),
          (this.imgSrc = `https://res.cloudinary.com/dprrzla0s/image/upload/v1673639043/background2_c237916e2e.jpg?updated_at=2023-01-13T19:44:04.002Z`)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div
    id="background"
    class=""
    style="background-blend-mode: multiply"
    :style="{
      backgroundImage: `linear-gradient(lightgray, lightgray), url(${this.imgSrc})`,
    }"
  >
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
  color: yellow;
  background-attachment: fixed;
  background-position: 49.31% 52.43%;
}
</style>
linear-gradient(gold, gold),
