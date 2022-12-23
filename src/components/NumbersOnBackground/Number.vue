<script>
export default {
  name: "Number",
  props: {
    MainNumber: String,
    title: String,
  }, setup(props) {
    const MainNumber = props.MainNumber;
    const title = props.title;
    
    return {MainNumber, title}
  }
};
</script>
<template>
  <div class="text-white text-center m-6">
    <p class="text-5xl m-4">{{ MainNumber }}</p>
    <p class="text-xl">{{title }}</p>
  </div>
</template>
