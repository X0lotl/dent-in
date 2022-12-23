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
  <div class="h-[38rem] background bg-cover flex justify-center text-white font-medium">
    <div class="container">
      <h1 class="text-4xl mt-48 md:text-6xl sm:text-5xl p-4 pb-0">Стоматологический центр "Дент-Ин"</h1>
      <h2 class="text-2xl md:text-3xl sm:text-2xl mt-10 mb-16 p-4 pb-0">
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
