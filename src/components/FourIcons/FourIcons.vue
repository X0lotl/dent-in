<script>
import axios from "axios";
import SectionTitle from "../SectionTitle.vue";
import Icon from "./Icon.vue";
export default {
  name: "FourIcons",
  components: {
    SectionTitle,
    Icon,
  },
  data() {
    return {
      fourIconsData: "",
    };
  },
  props: {
    sectionTitle: String,
  },
  setup(props) {
    let sectionTitle = props.sectionTitle;
    return { sectionTitle };
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
    <SectionTitle :title="sectionTitle"></SectionTitle>
    <div id="icons" class="grid">
      <Icon
        v-for="newIcon in fourIconsData"
        :iconData="newIcon.attributes"
      ></Icon>
    </div>
  </section>
</template>
<style scoped>
#icons {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
