<script>
import axios from "axios";
import Header from "../components/Header/Header.vue";
import SectionTitle from "../components/SectionTitle.vue";
import ServiceExtended from "../components/Services/ServiceExtended.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "ServicesPage",
  components: {
    Header,
    SectionTitle,
    ServiceExtended,
    Footer,
  },
  data() {
    return {
      servicesData: "",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/services-etended`, {
        params: {
          locale: this.$route.params.locale,
          populate: ["prices", "Photo"],
        },
      })
      .then((res) => (this.servicesData = res.data.data))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div style="min-height: calc(100vh - 19rem)" class="pb-10">
    <SectionTitle title="Послуги та ціни"></SectionTitle>
    <ServiceExtended
      v-for="service in this.servicesData"
      :serviceData="service"
    ></ServiceExtended>
  </div>
  <Footer></Footer>
</template>
