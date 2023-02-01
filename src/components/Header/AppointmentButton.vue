<script>
import axios from "axios";
import AppointmentModal from "./AppointmentModal.vue";
export default {
  name: "AppointmentButton",
  emits: ["smsSucces"],
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
    showSucces() {
      this.$emit("smsSucces");
    }
  },
};
</script>
<template>
  <button
    @click="openModal"
    class="text-white h-20 p-2 mt-4 bg-emerald-500 font-sans lg:text-lg text-base font-bold hover:bg-blue-400 p-5transition duration-200 rounded-md"
  >
    {{ title }}
  </button>
  <AppointmentModal @smsSended="showSucces()" v-show="this.isModalVisible" @close="closeModal" @click="closeModal"></AppointmentModal>
</template>
<style scoped></style>
