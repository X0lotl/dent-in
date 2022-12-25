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
  <h3 class="text-3xl font-light mt-20 text-center">{{ title }}</h3>
  <div class="flex justify-center">
    <div class="border-b border-emerald-500 w-12 h-5"></div>
  </div>
  
</template>

