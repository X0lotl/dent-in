<script>
export default {
  name: "HeaderButton",
  props: {
    insideText: String
  },
  setup(props) {
        let insideText = props.insideText;
        return insideText;
    }
};
</script>
<template>
    <button class="text-white m-6 font-bold text-lg hover:text-cyan-300 transition duration-200 font-sans" >{{ insideText }}</button>
</template>
