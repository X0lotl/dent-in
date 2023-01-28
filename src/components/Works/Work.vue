<script>
export default {
  name: "Work",
  props: {
    workData: Object,
  },
  setup(props) {
    return {
      workData: props.workData,
    };
  },
};
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${this.workData.imgUrl})` }"
    class="bg-no-repeat bg-cover h-80 m-5 grid place-items-end rounded-xl overflow-hidden"
  >
    <div class="h-3/4 mt-auto w-full bg-gradient-to-t from-black to-transparent">
      <h3 class="text-white mt-44 text-2xl text-center font-bold">
        {{ this.workData.title }}
      </h3>
    </div>
  </div>
</template>
<style scoped></style>
