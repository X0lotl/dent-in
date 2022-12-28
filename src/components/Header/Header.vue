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
    data: Object,
    languages: Array
  },
  setup(props) {
    const headerData = props.headerData;
    let data = props.data;
    let languages = props.languages;

    return { headerData, data, languages };
  },
};
</script>
<template>
  <div class="bg-white w-full flex justify-around fixed">
    <div class="flex justify-between container">
      <img class="m6 w-50 p-2 h-auto mr-20" :src="headerData.logoSrc" />
      <HeaderButton
        v-for="headerButton in headerData.headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <LanguagePicker :data="data" :languages="languages"></LanguagePicker>
      
      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
