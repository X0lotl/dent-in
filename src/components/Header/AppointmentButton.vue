<script>
import axios from "axios";
import AppointmentModal from "./AppointmentModal.vue";
export default {
  name: "AppointmentButton",
  components: {
    AppointmentModal,
  },
  data() {
    return { title: "Записатись на прийом", isModalVisible: false };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then(
        (res) => (this.title = res.data.data[0].attributes.AppointmentTitle)
      )
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
};
</script>
<template>
  <button
    class="text-white h-20 p-2 mt-4 bg-blue-500/95 font-sans lg:text-lg text-base font-bold hover:bg-blue-700/95 transition duration-200 rounded-md"
    @click="openModal"
  >
    {{ title }}
  </button>
  <AppointmentModal
    v-show="isModalVisible"
    @closeModal="closeModal"
    @click="closeModal"
  />
</template>
<style scoped></style>
