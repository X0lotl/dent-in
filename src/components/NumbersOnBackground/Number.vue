<script>
export default {
  name: "Number",
  props: {
    numberData: Object,
  },
  setup(props) {
    const numberData = props.numberData;

    return { numberData };
  },
};
</script>
<template>
  <div class="text-blue-500 font-bold text-center m-6">
    <p class="text-5xl m-4">{{ numberData.attributes.number }}</p>
    <p class="text-xl">{{ numberData.attributes.text }}</p>
  </div>
</template>
