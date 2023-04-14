<script>
import axios from "axios";
import SectionTitle from "../SectionTitle.vue";
import CustomIcon from "./CustomIcon.vue";
export default {
  name: "FourIcons",
  components: {
    SectionTitle,
    CustomIcon,
  },
  props: {
    sectionTitle: String,
  },
  data() {
    return {
      fourIconsData: "",
    };
  },
  mounted() {  
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/icons-with-text`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.fourIconsData = res.data.data))
      .catch((err) => {
        console.log(err);
      });
      
  },
};
</script>
<template>
  <section class="container text-center">
    <SectionTitle :title="sectionTitle" />
    <div
      id="icons"
      class="grid"
    >
      <CustomIcon
        v-for="newIcon in fourIconsData"
        :key="newIcon.id"
        :icon-data="newIcon.attributes"
      />
    </div>
  </section>
</template>
<style scoped>
#icons {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
