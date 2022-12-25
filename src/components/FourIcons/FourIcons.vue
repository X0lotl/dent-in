<script>
import SectionTitle from "../SectionTitle.vue";
import Icon from "./Icon.vue";
export default {
  name: "FourIcons",
  components: {
    SectionTitle,
    Icon,
},
  props: {
    fourIconsData: Object,
  },
  setup(props) {
    const fourIconsData = props.fourIconsData;
    return { fourIconsData };
  },
};
</script>
<template>
  <div class="container text-center">
    <SectionTitle title="ЗАБОТИМСЯ О ЗДОРОВЬЕ ВАШИХ ЗУБОВ"></SectionTitle>
    <div id="icons" class="grid">
      <Icon v-for="newIcon in fourIconsData.iconsArray" :iconData="newIcon"></Icon>
    </div>
  </div>
</template>
<style scoped>
#icons {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
