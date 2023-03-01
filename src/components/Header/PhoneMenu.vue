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
    opened: Boolean
  }
};
</script>
<template>
  <Transition name="phoneMenu">
    <div
      :class="{'opened':opened}"
      class="w-full grid gap-y-2 md:h-0 max-h-0 bg-neutral-300 overflow-hidden border-b-2 border-b-emerald-500 rounded-b-md transition-all duration-300 ease-in-out"
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
.opened {
  max-height: 500px !important;
}
</style>
