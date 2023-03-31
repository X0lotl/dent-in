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
  <div class="text-white font-bold text-center m-6">
    <h3 class="text-5xl m-4">
      {{ numberData.attributes.Number }}
    </h3>
    <p class="text-xl">
      {{ numberData.attributes.Text }}
    </p>
  </div>
</template>
