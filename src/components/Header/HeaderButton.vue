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
  <button
    class="text-blue-500 m-3 font-bold text-lg hover:text-cyan-300 transition duration-200"
  >
    {{ buttonData.title }}
  </button>
</template>
  