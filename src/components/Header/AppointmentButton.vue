<script>
import axios from "axios";
export default {
  name: "AppointmentButton",
  data() {
    return { title: "" };
  }, mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then((res) => (this.title = res.data.data[0].attributes.appointmentTitle))
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>
<template>
  <button
    class="text-white m-4 p-2 bg-emerald-600 font-sans text-lg font-bold hover:bg-emerald-700 transition duration-200 rounded-md"
  >
    {{ title }}
  </button>
</template>
