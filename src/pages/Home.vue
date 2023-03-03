<script>
import Header from "../components/Header/Header.vue";
import BigMessage from "../components/BigMessage/BigMessage.vue";
import FourIcons from "../components/FourIcons/FourIcons.vue";
import ImgWithText from "../components/ImgWithText/ImgWithText.vue";
import NumbersOnBackground from "../components/NumbersOnBackground/NumbersOnBackground.vue";
import Services from "../components/Services/Services.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import Footer from "../components/Footer/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    BigMessage,
    FourIcons,
    ImgWithText,
    NumbersOnBackground,
    Services,
    Reviews,
    Footer,
  },
  props: {
    locale: {
      default: "uk",
      type: String,
    },
  },
  data() {
    return {
      extraData: "",
      imagesWithTextData: "",
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
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/images-with-text/`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.imagesWithTextData = res.data.data.sort((a,b) => (a.id - b.id))))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <BigMessage></BigMessage>
  <FourIcons
    v-if="this.extraData.careTitle"
    :sectionTitle="this.extraData.careTitle"
  ></FourIcons>
  <template v-if="this.imagesWithTextData">
    <section>
      <ImgWithText
        v-for="image in this.imagesWithTextData"
        :imageWithTextData="image.attributes"
      ></ImgWithText>
    </section>
  </template>
  <NumbersOnBackground></NumbersOnBackground>
  <Services
    v-if="this.extraData"
    :sectionTitle="this.extraData.servicesTitle"
  ></Services>
  <Reviews
    v-if="this.extraData"
    :sectionTitle="this.extraData.reviewsTitle"
  ></Reviews>
  <Footer></Footer>
</template>

<style scoped></style>
