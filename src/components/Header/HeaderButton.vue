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
    class="text-blue-500 m-1 p-4 mt-6 text-center font-bold text-lg hover:text-cyan-300 transition duration-200"
  >
    <router-link
      :to="{
        name: buttonData.attributes.LinkToPage,
        params: {
          locale: this.$route.params.locale,
        },
      }"
    >
      {{ buttonData.attributes.name }}
    </router-link>
  </div>
</template>
