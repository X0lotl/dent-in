<script>
import AppointmentButton from '../Header/AppointmentButton.vue';
export default {
  name: "BigMessage",
  components: {
    AppointmentButton
  }
};
</script>
<template>
  <div class="h-[35rem] background bg-cover flex justify-center text-white font-medium">
    <div class="container">
      <h1 class="mt-48 text-6xl">Стоматологический центр "Дент-Ин"</h1>
      <h2 class="text-3xl mt-10 mb-10">
        Высший пилотаж в стоматологии. Мы работаем для тех, кто выбирает лучшее!
      </h2>
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url("../../assets/background2.jpg");
  background-position: 50.18% 94.35%;
}
</style>
