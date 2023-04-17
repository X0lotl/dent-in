<script>
import AppointmentButton from "../Header/AppointmentButton.vue";
import axios from "axios";
export default {
  name: "BigMessage",
  components: {
    AppointmentButton,
  },
  data() {
    return {
      bigMessageData: {
        Title: "Стоматологічний центр «Дент- ін»",
        SubTitle: "Вищий пілотаж у стоматології. Ми працюємо для тих, хто обирає найкраще!"
      },
      imgUrl: "https://res.cloudinary.com/dprrzla0s/image/upload/v1681553019/large_IMG_3088_4b81ce7fb5.webp",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/big-messages`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then(
        (res) => (
          this.bigMessageData = res.data.data[0].attributes
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
    class="h-[80vh] background bg-cover bg-blend-overlay flex justify-center text-white font-medium sm:p-20 p-5"
    style="background-blend-mode: multiply;"
    fetchpriority="high"
    :style="{ backgroundImage: `linear-gradient(lightgray, lightgray), url(${imgUrl})` }"
  >
    <div class="container">
      <h1 class="mt-20 md:text-6xl sm:text-4xl text-4xl italic">
        {{ bigMessageData.Title }}
      </h1>
      <h2 class="md:text-3xl sm:text-3xl text-3xl mt-10 mb-16 pb-0">
        {{ bigMessageData.SubTitle }}
      </h2>
      <AppointmentButton />
    </div>
  </section>
</template>
<style scoped>
.background {
  background-position: 50% 60.35%;

}
</style>
