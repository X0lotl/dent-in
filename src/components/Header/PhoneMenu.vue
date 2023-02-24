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
    <div
      class="w-full grid gap-y-2 md:h-0 h-72 bg-neutral-300 overflow-hidden border-b-2 border-b-emerald-500 rounded-b-md"
    >
      <HeaderButton
        v-for="headerButton in headerButtonsData"
        :buttonData="headerButton"
      ></HeaderButton>
      <div class="flex justify-center">
        <LanguagePicker @click.stop></LanguagePicker>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.phoneMenu-enter {
  height: 0px;
}
.phoneMenu-leave-to {
  height: 1px;
}

.phoneMenu-enter-active,
.phoneMenu-leave-active {
  transition-duration: 1s;
  transition-delay: 10ms;
}
</style>
