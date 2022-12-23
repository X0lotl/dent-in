<script>
export default {
  name: "Review",
  props: {
    reviewerName: String,
    reviewText: String,
  },
  setup(props) {
    const reviewerName = props.reviewerName;
    const reviewText = props.reviewText;

    return { reviewerName, reviewText };
  },
};
</script>
<template>
  <div class="bg-white m-3 p-5 flex justify-between">
    <slot></slot>
    <div>
      <p class="text-2xl font-bold">{{ reviewerName }}</p>
      <p class="pt-2 font-thin">{{ reviewText }}</p>
    </div>
  </div>
</template>
