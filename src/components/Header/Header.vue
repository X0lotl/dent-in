<script>
import HeaderButton from "./HeaderButton.vue";
import LanguagePicker from "./LanguagePicker.vue";
import AppointmentButton from "./AppointmentButton.vue";

export default {
  name: "Header",
  components: {
    HeaderButton,
    LanguagePicker,
    AppointmentButton,
  },
  props: {
    headerData: Object,
  },
  setup(props) {
    const headerData = props.headerData;
    return { headerData };
  },
};
</script>
<template>
  <div class="bg-neutral-700 w-full h-30 flex justify-around fixed">
    <div class="flex justify-between container">
      <img class="m6 w-40 h-auto mr-20" :src="headerData.logoSrc" />
      <HeaderButton
        v-for="headerButton in headerData.headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <LanguagePicker></LanguagePicker>
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
