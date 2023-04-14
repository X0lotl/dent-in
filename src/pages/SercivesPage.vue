<script>
import axios from "axios";
import SectionTitle from "../components/SectionTitle.vue";
import ServiceExtended from "../components/Services/ServiceExtended.vue";

export default {
  name: "ServicesPage",
  components: {
    SectionTitle,
    ServiceExtended,
  },
  data() {
    return {
      servicesData: "",
      extraData: ""
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
      .then((res) => (this.servicesData = res.data.data.sort((a,b) => (a.id - b.id))))
      .catch((err) => {
      console.log(err);
    });
  axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
    params: {
      locale: this.$route.params.locale
    },
  })
    .then((res) => (this.extraData = res.data.data[0].attributes))
    .catch((err) => {
      console.log(err);
    });
},
};
</script>
<template>
  <div
    style="min-height: calc(100vh - 19rem)"
    class="pb-10"
  >
    <section>
      <SectionTitle
        v-if="extraData"
        :title="extraData.servicesExtendedTitle"
      />
      <ServiceExtended
        v-for="service in servicesData"
        :key="service.attributes.id"
        :extra-data="extraData"
        :service-data="service"
      />
    </section>
  </div>
</template>
