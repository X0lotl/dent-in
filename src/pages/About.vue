<script>
import axios from "axios";
import Header from "../components/Header/Header.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Footer from "../components/Footer/Footer.vue";
import ImgWithText from "../components/ImgWithText/ImgWithText.vue";
import Works from "../components/Works/Works.vue";

export default {
  name: "About",
  components: {
    Header,
    SectionTitle,
    Footer,
    ImgWithText,
    Works,
  },
  data() {
    return {
      aboutData: ""
    }
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/about-page-contents`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.aboutData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="content">
    <Header></Header>
    <div class="h-20"></div>
    <SectionTitle title="Про нас"></SectionTitle>
    <ImgWithText v-if="this.aboutData" :imageWithTextData="this.aboutData"></ImgWithText>
    <SectionTitle title="Минулі роботи"></SectionTitle>
    <Works></Works>
  </div>
  <Footer></Footer>
</template>
<style scoped>
.content {
  min-height: calc(100vh - 160px);
}
</style>
