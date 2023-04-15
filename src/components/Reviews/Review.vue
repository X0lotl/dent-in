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
  <div class="bg-white m-3 p-5 grid grid-cols-1 gap-10 md:flex md:justify-between rounded-md">
    <slot />
    <div>
      <h3 class="text-2xl font-bold">
        {{ reviewerName }}
      </h3>
      <p class="pt-2 font-thin whitespace-pre-wrap">
        {{ reviewText }}
      </p>
    </div>
  </div>
</template>
