<script>
import HeaderButton from "../Header/HeaderButton.vue";
import LanguagePicker from "./LanguagePicker.vue";

export default {
  name: "PhoneMenu",
  components: {
    HeaderButton,
    LanguagePicker,
  },
  props: {
    headerButtonsData: Object,
  },
  setup(props) {
    const headerButtonsData = props.headerButtonsData;
    return { headerButtonsData };
  },
};
</script>
<template>
  <Transition name="phoneMenu">
    <div class="w-full md:h-[1px] h-72 bg-neutral-300 overflow-hidden">
      <HeaderButton
        v-for="headerButton in headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <div class="flex justify-center">
        <LanguagePicker></LanguagePicker>
      </div>
      
    </div>
  </Transition>
</template>
<style scoped>
.phoneMenu-enter {
  height: 1000px;
}
.phoneMenu-leave-to {
  height: 1px;
}

.phoneMenu-enter-active,
.phoneMenu-leave-active {
  transition: 1s;
}
</style>
