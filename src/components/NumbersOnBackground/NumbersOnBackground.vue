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
          (this.numbersOnBackgroundData = res.data.data.sort((a,b) => a.id - b.id)),
          (this.imgSrc = `https://res.cloudinary.com/dprrzla0s/image/upload/v1677691418/background1_500d53713f.webp?updated_at=2023-03-01T17:23:39.640Z`)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <section
    v-if="this.numbersOnBackgroundData"
    id="background"
    class=""
    style="background-blend-mode: multiply"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${this.imgSrc})`,
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
  </section>
</template>
<style scoped>
#background {
  color: yellow;
  background-size: 100% auto;
  background-attachment: fixed;
  background-position: 49.31% 52.43%;
}
</style>
linear-gradient(gold, gold),
