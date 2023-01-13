<script>
import SectionTitle from "../SectionTitle.vue";
import Service from "./Service.vue";
import axios from "axios";
import { toHandlers } from "vue";

export default {
  name: "Services",
  props: {
    sectionTitle: String
  },
  setup(props) {
    const sectionTitle = props.sectionTitle;
    return {sectionTitle}
  },
  components: {
    SectionTitle,
    Service,
  },
  data() {
    return { servicesData: [], url: `${import.meta.env.VITE_STRAPI_URL}/api/services` };
  },
  mounted() {
    axios
      .get(this.url, { params: {
        locale: this.$route.params.locale
      } })
      .then((res) => (this.servicesData = res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>
<template>
  <div class="container text-black">
    <SectionTitle :title="sectionTitle"></SectionTitle>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-16">
      <Service
        v-for="(thisService, index) in this.servicesData"
        :title="thisService.attributes.Title"
        :text="thisService.attributes.Text"
      ></Service>
    </div>
  </div>
</template>
