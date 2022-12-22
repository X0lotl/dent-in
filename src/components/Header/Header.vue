<script>
import HeaderButton from "./HeaderButton.vue";
import LanguagePicker from "./LanguagePicker.vue";
import AppointmentButton from "./AppointmentButton.vue";

export default {
  name: "Header",
  components: {
    HeaderButton,
    LanguagePicker,
    AppointmentButton
  },
};
</script>
<template>
  <div class="bg-stone-700 h-30 flex justify-around">
    <div class="flex justify-between container">
      <img class="m6 w-40 h-auto mr-20" src="../../assets/logo2.png" />
      <HeaderButton insideText="Про нас"></HeaderButton>
      <HeaderButton insideText="Послуги"></HeaderButton>
      <HeaderButton insideText="Ціни"></HeaderButton>
      <HeaderButton insideText="Лікарі"></HeaderButton>
      <HeaderButton insideText="Контакти"></HeaderButton>
      <LanguagePicker></LanguagePicker>
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
