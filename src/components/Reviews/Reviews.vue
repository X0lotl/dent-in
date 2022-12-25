<script>
import SectionTitle from "../SectionTitle.vue";
import Review from "./Review.vue";

export default {
  name: "Reviews",
  components: {
    SectionTitle,
    Review,
  },
  props: {
    reviewsData: Array,
  },
  setup(props) {
    const reviewsData = props.reviewsData;
    return { reviewsData };
  },
};
</script>
<template>
  <div class="bg-slate-100">
    <div class="container pt-1 pb-10">
      <SectionTitle title="ОТЗЫВЫ"></SectionTitle>
      <div class="pt-10 grid lg:grid-cols-2 md:grid-cols-1">
        <Review
          v-for="thisReview in reviewsData"
          :reviewerName="thisReview.reviewerName"
          :reviewText="thisReview.reviewText"
          ><img class="w-32 h-32 rounded-[50%] mr-10" :src="thisReview.imgSrc"
        /></Review>
      </div>
    </div>
  </div>
</template>
