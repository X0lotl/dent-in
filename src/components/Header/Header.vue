<script>
import axios from "axios";
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
  data() {
    return {
      headerButtonsData: "",
      logoSrc: "",
      
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/header-link-buttons`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then(
        (res) => (
          (this.headerButtonsData = res.data.data),
          (this.logoSrc = `${
            import.meta.env.VITE_STRAPI_URL
          }/uploads/Logo_ai_8cf8214739.svg?updated_at=2023-01-02T13:34:48.176Z`)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>
<template>
  <div class="bg-neutral-200 w-full flex justify-around fixed">
    <div class="flex justify-between container">
      <router-link
        :to="{
          name: `home`,
          params: {
            locale: this.$route.params.locale,
          },
        }"
      >
        <img class="m6 w-50 p-2 h-auto mr-20" :src="this.logoSrc" />
      </router-link>
      
      <HeaderButton
        v-for="headerButton in this.headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <LanguagePicker></LanguagePicker>

      <AppointmentButton></AppointmentButton>
    </div>
  </div>
</template>
