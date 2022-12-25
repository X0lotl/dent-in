<script>
import AppointmentButton from "../Header/AppointmentButton.vue";
export default {
  name: "BigMessage",
  components: {
    AppointmentButton,
  },
  props: {
    bigMessageData: Object,
  },
  setup(props) {
    const bigMessageData = props.bigMessageData;
    return { bigMessageData };
  },
};
</script>
<template>
  <div
    class="h-[38rem] background bg-cover flex justify-center text-white font-medium"
  >
    <div class="container">
      <h1 class="text-4xl mt-48 md:text-6xl sm:text-5xl p-4 pb-0">
        {{ this.bigMessageData.title }}
      </h1>
      <h2 class="text-2xl md:text-3xl sm:text-2xl mt-10 mb-16 p-4 pb-0">
        {{ this.bigMessageData.subTitle}}
      </h2>
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url("../../assets/background2.jpg");
  background-position: 50.18% 90.35%;
}
</style>
