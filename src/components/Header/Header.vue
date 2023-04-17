<script>
import axios from "axios";
import HeaderButton from "./HeaderButton.vue";
import LanguagePicker from "./LanguagePicker.vue";
import AppointmentButton from "./AppointmentButton.vue";
import PhoneMenu from "./PhoneMenu.vue";
import { Icon } from "@iconify/vue"

export default {
  name: "HeaderVue",
  components: {
    HeaderButton,
    LanguagePicker,
    AppointmentButton,
    PhoneMenu,
    Icon,
  },
  data() {
    return {
      headerButtonsData: [
        {
          id: "1",
          attributes: {
            Title: "Про нас"
          }
        },
        {
          id: "2",
          attributes: {
            Title: "Команда"
          }
        },
        {
          id: "3",
          attributes: {
            Title: "Контакти"
          }
        },
        {
          id: "4",
          attributes: {
            Title: "Послуги та ціни"
          }
        }
      ],
      logoSrc: "",
      isMenuOpened: false,
    };
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
          .then((res) => (this.headerButtonsData = res.data.data.sort((a, b) => (a.id - b.id))))
          .catch((err) => {
            console.log(err);
          });
      },
      immediate: true,
    },
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
      console.log(this.isMenuOpened);
    },
  },
};
</script>
<template>
  <header class="bg-neutral-200 ming-h-[116px] z-10 w-full fixed border-b-2 border-b-emerald-500 overflow-hidden">
    <div class="flex justify-center items-center">
      <div
        :key="headerButtonsData"
        class="flex justify-between container"
      >
        <router-link
          :to="{
            name: `home`,
            params: {
              locale: $route.params.locale,
            },
          }"
        >
          <img
            v-if="logoSrc"
            alt="Logo"
            class="p-2 h-28"
            width="164"
            height="80"
            loading="lazy"
            :src="logoSrc"
          />
        </router-link>
        <nav class="md:flex min-h-1 justify-center gap-1 md:gap-4 lg:gap-10 items-center hidden">
          <HeaderButton
            v-for="headerButton in headerButtonsData"
            :key="headerButton.id"
            :button-data="headerButton"
          />
        </nav>
        <LanguagePicker class="md:block hidden" />
        <AppointmentButton />
        <button
          class="md:hidden block bg-blue-400 font-bold sm:text-base text-xs text-white m-4 rounded-lg p-4"
          @click="openCloseMenu()"
        >
          Menu
          <Icon
            icon="fa6-solid:bars"
            class="w-full text-center mt-1 text-[15px]"
          />
        </button>
      </div>
    </div>

    <PhoneMenu
      v-if="headerButtonsData"
      :opened="isMenuOpened"
      :header-buttons-data="headerButtonsData"
      @click.stop="openCloseMenu()"
    />
  </header>
</template>
