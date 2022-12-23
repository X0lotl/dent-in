<script>
export default {
  name: "Icon",
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
  <div class=" p-2 text-center">
    <div class="flex justify-center">
      <div
        class="rounded-[50%] h-40 w-40 flex justify-center align-middle p-8 hover:bg-blue-400 transition duration-700"
      >
        <slot></slot>
      </div>
    </div>
    <p class="text-2xl mt-7">{{ title }}</p>
    <p class="mt-5 text-stone-700">{{ text }}</p>
  </div>
</template>
