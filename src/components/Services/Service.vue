<script>
export default {
  name: "Service",
  props: {
    title: String,
    text: String,
  },
  setup(props) {
    const title = props.title;
    const text = props.text;

    return { title, text };
  },
};
</script>
<template>
  <div class="m-4 p-2">
    <h3 class="text-center text-2xl text-slate-700 font-bold">
      {{ title }}
    </h3>
    <p class="text-center mt-3 text-neutral-500 whitespace-pre-wrap">
      {{ text }}
    </p>
  </div>
</template>
