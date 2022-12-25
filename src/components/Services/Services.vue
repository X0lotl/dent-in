<script>
import SectionTitle from "../SectionTitle.vue";
import Service from "./Service.vue";
export default {
  name: "Services",
  components: {
    SectionTitle,
    Service,
  },
  props: {
    servicesData: Array,
  },
  setup(props) {
    const servicesData = props.servicesData;
    return { servicesData };
  },
};
</script>
<template>
  <div class="container">
    <SectionTitle title="УСЛУГИ"></SectionTitle>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-16">
      <Service
        v-for="(thisService, index) in this.servicesData"
        :title="thisService.title"
        :text="thisService.text"
      ></Service>
    </div>
  </div>
</template>
