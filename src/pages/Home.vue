<script>
import BigMessage from "../components/BigMessage/BigMessage.vue";
import FourIcons from "../components/FourIcons/FourIcons.vue";
import ImgWithText from "../components/ImgWithText/ImgWithText.vue";
import NumbersOnBackground from "../components/NumbersOnBackground/NumbersOnBackground.vue";
import Services from "../components/Services/Services.vue";
import Reviews from "../components/Reviews/Reviews.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    BigMessage,
    FourIcons,
    ImgWithText,
    NumbersOnBackground,
    Services,
    Reviews,
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
  <BigMessage />
  <FourIcons
    v-if="extraData.careTitle"
    :section-title="extraData.careTitle"
  />
  <template v-if="imagesWithTextData">
    <section>
      <ImgWithText
        v-for="image in imagesWithTextData"
        :key="image.id"
        :image-with-text-data="image.attributes"
      />
    </section>
  </template>
  <NumbersOnBackground />
  <Services
    v-if="extraData"
    :section-title="extraData.servicesTitle"
  />
  <Reviews
    v-if="extraData"
    :section-title="extraData.reviewsTitle"
  />
</template>

<style scoped></style>
