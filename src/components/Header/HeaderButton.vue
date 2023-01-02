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
  <router-link
    class="text-blue-500 m-9 font-bold text-lg hover:text-cyan-300 transition duration-200"
    :to="{
      name: buttonData.attributes.LinkToPage,
      params: {
        locale: this.$route.params.locale,
      },
    }"
  >
    {{ buttonData.attributes.name }}
  </router-link>
</template>
