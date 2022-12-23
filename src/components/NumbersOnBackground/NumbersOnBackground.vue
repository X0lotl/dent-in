<script>
import Number from './Number.vue';
export default {
  name: "NumbersOnBackground",
  components: {
    Number,
  }
};
</script>
<template>
  <div id="background" class="">
    <div class= "container grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-36">
    <Number MainNumber="1" title="Стоматологический центр"></Number>
    <Number MainNumber="12" title="Опытных врачей"></Number>
    <Number MainNumber="20" title="Лет работаем для Вас"></Number>
    <Number MainNumber="7,000" title="Довольных пациентов"></Number>
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
