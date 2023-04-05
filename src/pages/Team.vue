<script>
import axios from "axios";
import SectionTitle from "../components/SectionTitle.vue";
import Doctor from "../components/Doctors/Doctor.vue";
export default {
  name: "Team",
  components: {
    SectionTitle,
    Doctor,
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
      .then((res) => (this.doctorsData = res.data.data.sort((a,b) => (a.id - b.id))))
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
        v-if="extraData"
        :title="extraData.teamTitle"
      />

      <div
        v-if="doctorsData"
        class="container p-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <Doctor
          v-for="doctor in doctorsData"
          :key="doctor.id"
          :doctor-data="doctor.attributes"
        />
      </div>
    </section>
  </div>
  <Footer />
</template>
<style scoped>
.content {
  min-height: calc(100vh - 19rem);
}
</style>
