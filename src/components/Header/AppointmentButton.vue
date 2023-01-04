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
      this.isModalVisible = false;
    },
  },
};
</script>
<template>
  <button @click="openModal"
    class="text-white m-4 p-2 bg-emerald-600 font-sans text-lg font-bold hover:bg-emerald-700 p-5transition duration-200 rounded-md"
  >
    {{ title }}
  </button>
  <Modal v-show="this.isModalVisible" @click="closeModal"></Modal>
</template>
