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
      bigMessageData: [],
      imgUrl: "",
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
          (this.bigMessageData = res.data.data[0].attributes),
          (this.imgUrl = `${import.meta.env.VITE_STRAPI_URL}${this.bigMessageData.Background.data.attributes.url}`)
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
    class="h-[38rem] background bg-cover flex justify-center text-white font-medium p-20"
    :style="{ backgroundImage: `url(${this.imgUrl})` }"
  >
    <div class="container">
      <h1 class="text-4xl mt-20 md:text-6xl sm:text-5xl p-4 pb-0">
        {{ this.bigMessageData.Title }}
      </h1>
      <h2 class="text-2xl md:text-3xl sm:text-2xl mt-10 mb-16 p-4 pb-0">
        {{ this.bigMessageData.SubTitle }}
      </h2>
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-position: 50.18% 90.35%;
}
</style>
