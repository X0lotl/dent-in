<script>
import axios from "axios";
import Modal from "./Modal.vue";
export default {
  name: "AppointmentButton",
  components: {
    Modal,
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
        (res) => (this.title = res.data.data[0].attributes.appointmentTitle)
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
      console.log(2);
      this.isModalVisible = false;
    },
  },
};
</script>
<template>
  <button @click="openModal"
    class="text-white h-20 p-2 mt-4 bg-emerald-600 font-sans text-lg font-bold hover:bg-emerald-700 p-5transition duration-200 rounded-md"
  >
    {{ title }}
  </button>
  <Modal v-show="this.isModalVisible" @close="closeModal"></Modal>
</template>
<style scoped>
</style>
