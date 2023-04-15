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
      .then((res) => (this.reviews = res.data.data.sort((a,b) => a.id - b.id)),
      (this.imgSrc = `${import.meta.env.VITE_STRAPI_URL}`))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <section class="bg-slate-100">
    <div class="container pt-1 pb-10">
      <SectionTitle :title="sectionTitle" />
      <div
        v-if="reviews"
        class="pt-10 grid lg:grid-cols-2 md:grid-cols-1"
      >
        <Review
          v-for="thisReview in reviews"
          :key="thisReview.id"
          :reviewer-name="thisReview.attributes.Name"
          :review-text="thisReview.attributes.Text"
        >
          <img
            class="w-32 h-32 rounded-[50%]"
            :alt="thisReview.attributes.Name"
            :src="thisReview.attributes.avatar.data.attributes.url"
          />
        </Review>
      </div>
    </div> 
  </section>
</template>
