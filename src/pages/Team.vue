<script>
import axios from "axios";
import Header from "../components/Header/Header.vue";
import AppointmentButton from "../components/Header/AppointmentButton.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Doctor from "../components/Doctors/Doctor.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Team",
  components: {
    Header,
    AppointmentButton,
    SectionTitle,
    Doctor,
    Footer,
  },
  data() {
    return {
      doctorsData: "",
      extraData: "",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then((res) => (this.extraData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/doctors`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.doctorsData = res.data.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="content">
    <section>
      <SectionTitle
        v-if="this.extraData"
        :title="this.extraData.teamTitle"
      ></SectionTitle>

      <div
        v-if="this.doctorsData"
        class="container p-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <Doctor
          v-for="doctor in this.doctorsData"
          :doctorData="doctor.attributes"
        ></Doctor>
      </div>
    </section>
  </div>
  <Footer></Footer>
</template>
<style scoped>
.content {
  min-height: calc(100vh - 19rem);
}
</style>
