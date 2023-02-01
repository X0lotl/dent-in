<script>
export default {
  name: "MessageModal",
  props: {
    isModalOpened: Boolean,
  },
  watch: {
    isModalOpened: function () {
      if (this.isModalOpened) {
        setTimeout(() => {
          this.$emit("close");
        }, 4000);
      }
    },
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div
      :class="{ closed: !this.isModalOpened }"
      class="bg-neutral-200 pt-10 w-1/4 mt-[75vh] fixed border-2 border-emerald-500 rounded-xl overflow-hidden transition-all duration-500"
    >
      <div class="flex justify-center">
        <h2 class="px-10">Зайвку отримано! Незабаром з вами зв'яжуться</h2>
      </div>

      <div
        :class="{ barclose: this.isModalOpened }"
        class="h-2 mt-8 w-full bg-blue-400"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.closed {
  margin-top: 100vh;
  height: 1px;
  width: 1px;
  transition: all 300ms ease-in-out;
}

.barclose {
  width: 1px;
  transition: all, 3900ms;
}
</style>
