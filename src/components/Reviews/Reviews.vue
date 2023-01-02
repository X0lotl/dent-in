<script>
import SectionTitle from "../SectionTitle.vue";
import Review from "./Review.vue";
import axios from "axios";

export default {
  name: "Reviews",
  components: {
    SectionTitle,
    Review,
  },
  props: {
    sectionTitle: String
  },
  setup(props) {
    const sectionTitle = props.sectionTitle;
    return { sectionTitle };
  },
  data() {
    return {
      reviews: "",
      imgSrc: ""
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/reviews`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.reviews = res.data.data),
      (this.imgSrc = `${import.meta.env.VITE_STRAPI_URL}`))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="bg-slate-100">
    <div class="container pt-1 pb-10">
      <SectionTitle :title="this.sectionTitle"></SectionTitle>
      <div v-if="reviews" class="pt-10 grid lg:grid-cols-2 md:grid-cols-1">
        <Review
          v-for="thisReview in reviews"
          :reviewerName="thisReview.attributes.name"
          :reviewText="thisReview.attributes.text"
          ><img class="w-32 h-32 rounded-[50%] mr-10" :src="this.imgSrc + thisReview.attributes.avatar.data.attributes.url"
        /></Review>
      </div>
    </div>
  </div>
</template>
