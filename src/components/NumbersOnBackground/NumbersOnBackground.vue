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
    v-if="numbersOnBackgroundData"
    id="background"
    class="bg-no-repeat"
    style="background-blend-mode: multiply"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgSrc})`,
    }"
  >
    <div
      v-if="numbersOnBackgroundData"
      class="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:py-32 p-10 gap-10"
    >
      <Number
        v-for="numberData in numbersOnBackgroundData"
        :number-data="numberData"
      />
    </div>
  </section>
</template>
<style scoped>
#background {
  color: yellow;
  background-size: cover;
  background-attachment: fixed;
  background-position: 49.31% 52.43%;
}
</style>
linear-gradient(gold, gold),
