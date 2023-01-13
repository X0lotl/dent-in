<script>
import axios from "axios";
import AppointmentModal from "./AppointmentModal.vue";
export default {
  name: "AppointmentButton",
  components: {
    AppointmentModal,
  },
  data() {
    return { title: "", isModalVisible: false };
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
    },
  },
};
</script>
<template>
  <button
    @click="openModal"
    class="text-white h-20 p-2 mt-4 bg-emerald-500 font-sans text-lg font-bold hover:bg-blue-400 p-5transition duration-200 rounded-md"
  >
    {{ title }}
  </button>
  <AppointmentModal v-show="this.isModalVisible" @close="closeModal"></AppointmentModal>
</template>
<style scoped></style>
