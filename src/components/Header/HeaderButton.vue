<script>
export default {
  name: "HeaderButton",
  props: {
    buttonData: Object,
  },
  setup(props) {
    const buttonData = props.buttonData;
    return { buttonData };
  },
};
</script>
<template>
  <div
    class="text-blue-500  text-center font-bold lg:text-lg text-base hover:text-cyan-300 transition duration-200"
  >
    <router-link
      :to="{
        name: buttonData.attributes.LinkToPage,
        params: {
          locale: this.$route.params.locale,
        },
      }"
    >
      {{ buttonData.attributes.Title }}
    </router-link>
  </div>
</template>
