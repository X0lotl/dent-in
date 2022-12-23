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
  <div class="text-white text-center">
    <p class="text-5xl">{{ MainNumber }}</p>
    <p class="text-xl">{{title }}</p>
  </div>
</template>
