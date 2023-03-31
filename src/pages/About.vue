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
      aboutData: "",
      extraData: "",
    };
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
  },
};
</script>
<template>
  <div class="content">
    <section>
      <SectionTitle
        v-if="extraData"
        :title="extraData.aboutTitle"
      />
      <ImgWithText
        v-if="aboutData"
        :image-with-text-data="aboutData"
      />
    </section>
    <SectionTitle
      v-if="extraData"
      :title="extraData.worksTitle"
    />
    <Works />
  </div>
  <Footer />
</template>
<style scoped>
.content {
  min-height: calc(100vh - 19rem);
}
</style>
