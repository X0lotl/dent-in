<script>
export default {
  name: "Price",
  props: {
    title: String,
    price: String,
    currency: String
  }
};
</script>
<template>
  <div class="flex gap-4 md:my-6 pb-2 justify-between lg:px-20 px-2 border-b-2 border-b-emerald-500 border-dashed md:text-xl sm:text-base text-sm">
    <h4 class="max-w-2xl p-2">
      {{ title }}
    </h4>
    <p class="mt-auto whitespace-nowrap p-2 text-right">
      {{ price }} {{ currency }}
    </p>
  </div>
</template>
