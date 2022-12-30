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
    locale: String,
  },
  setup(props) {
    const headerData = props.headerData;
    let data = props.data;
    let locale = props.locale;
    return { headerData, data, locale };
  },
};
</script>
<template>
  <div class="bg-neutral-200 w-full flex justify-around fixed">
    <div class="flex justify-between container">
      <router-link :to="{
        name: `home`,
        params: {
          locale: this.$route.params.locale
        }
      }">
        <img class="m6 w-50 p-2 h-auto mr-20" :src="headerData.logoSrc" />
      </router-link>
      <HeaderButton
        v-for="headerButton in headerData.headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <LanguagePicker :locale="locale"></LanguagePicker>

      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
