<script>
import axios from "axios";
import HeaderButton from "./HeaderButton.vue";
import LanguagePicker from "./LanguagePicker.vue";
import AppointmentButton from "./AppointmentButton.vue";
import PhoneMenu from "./PhoneMenu.vue";

export default {
  name: "Header",
  components: {
    HeaderButton,
    LanguagePicker,
    AppointmentButton,
    PhoneMenu
  },
  data() {
    return {
      headerButtonsData: "",
      logoSrc: "",
      isMenuOpened: false
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
          (this.logoSrc = `https://res.cloudinary.com/dprrzla0s/image/upload/v1673613702/Logo_ai_50ea5b779a.svg?updated_at=2023-01-13T12:41:43.789Z`)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    openCloseMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    }
  },
  watch: {
    "$route.params.locale": {
      handler: function (newLocale) {
        this.headerButtonsData = "";
        axios
          .get(`${import.meta.env.VITE_STRAPI_URL}/api/header-link-buttons`, {
            params: {
              locale: newLocale,
            },
          })
          .then((res) => (this.headerButtonsData = res.data.data))
          .catch((err) => {
            console.log(err);
          });
      },
      immediate: true,
    },
  },
};
</script>
<template>
  <header class="bg-neutral-200 w-full fixed border-b-2 border-b-emerald-500">
    <div class="flex justify-center items-center">
      <div v-if="this.headerButtonsData" class="flex justify-between container">
        <router-link
          :to="{
            name: `home`,
            params: {
              locale: this.$route.params.locale,
            },
          }"
        >
          <img v-if="this.logoSrc" class="m6 p-2 h-28 mr-20" :src="this.logoSrc" />
        </router-link>
        <div
          
          class="md:flex justify-center hidden"
        >
          <HeaderButton
            v-for="headerButton in this.headerButtonsData"
            :buttonData="headerButton"
          ></HeaderButton>
        </div>

        <LanguagePicker class="md:block hidden"></LanguagePicker>
        <AppointmentButton ></AppointmentButton>
        <button
          @click="openCloseMenu()"
          class="md:hidden block bg-blue-400 font-bold text-white m-4 rounded-lg p-4"
        >
          Menu
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <PhoneMenu
      @click.stop="openCloseMenu()"
      v-if="this.headerButtonsData"
      v-show="this.isMenuOpened"
      :headerButtonsData="this.headerButtonsData"
    ></PhoneMenu>
  </header>
</template>
