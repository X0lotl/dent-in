<script>
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
};
</script>
<template>
  <Header></Header>
  <div style="min-height: calc(100vh - 5rem);">
    <div class="h-20"></div>
    <SectionTitle title="Послуги та ціни"></SectionTitle>
    <ServiceExtended></ServiceExtended>
    <ServiceExtended></ServiceExtended>
    <ServiceExtended></ServiceExtended>
    
  </div>
  <Footer></Footer>
</template>

