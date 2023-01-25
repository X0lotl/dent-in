<script>
export default {
  name: "Price",
  props: {
    title: String,
    price: String,
    currency: String
  },
  setup(props) {
    let title = props.title;
    let price = props.price;
    let currency = props.currency
    return { title, price };
  },
};
</script>
<template>
  <div class="flex my-6 pb-2 justify-between lg:px-20 px-2 border-b-2 border-b-emerald-500 border-dashed md:text-xl sm:text-base text-sm">
    <p>{{ title }}</p>
    <p>{{ price }} {{ currency }}</p>
  </div>
</template>
