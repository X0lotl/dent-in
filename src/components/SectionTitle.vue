<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  },
  setup(props) {
    const title = props.title;
    return {title};
  },
};
</script>
<template>
  <h2 class="text-4xl font-light mt-20 text-center">{{ title }}</h2>
  <div class="flex justify-center">
    <div class="border-b border-emerald-500 w-12 h-5"></div>
  </div>
</template>