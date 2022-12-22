<script>
import HeaderButton from './HeaderButton.vue';

export default {
  name: "Header",
  components: {
    HeaderButton
  }
};
</script>
<template>
    <div class="bg-stone-700 h-30 flex justify-center">
        <img class="m6 w-40 h-30" src="../assets/logo2.png">
        <HeaderButton insideText="Про нас"></HeaderButton>
        <HeaderButton insideText="Послуги"></HeaderButton>
        <HeaderButton insideText="Ціни"></HeaderButton>
        <HeaderButton insideText="Лікарі"></HeaderButton>
        <HeaderButton insideText="Контакти"></HeaderButton>
    </div>
</template>
