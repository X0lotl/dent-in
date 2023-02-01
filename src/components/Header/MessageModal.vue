<script>
export default {
  name: "MessageModal",
  emits: ["closeModal"],
  props: {
    isModalOpened: Boolean,
  },
  watch: {
    isModalOpened: function () {
      if (this.isModalOpened) {
        setTimeout(() => {
          this.$emit("closeModal");
        }, 4000);
      }
    },
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div
      :class="{ closed: !this.isModalOpened }"
      class="bg-neutral-200 mt-[75vh] w-[31rem] fixed border-2 border-emerald-500 rounded-xl overflow-hidden transition-all duration-500"
    >
      <div class="flex justify-end p-2">
        <button
          @click.stop="close()"
          class="rounded-full h-10 w-10 border-4 border-red-500 hover:border-red-600 hover:rotate-180 transition duration-200"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <h2 class="px-10 font-bold">Зайвку отримано! Незабаром з вами зв'яжуться</h2>
      <div class="h-2 mt-8 bg-neutral-300">
        <div
        :class="{ barclose: this.isModalOpened }"
        class="h-full w-full bg-blue-400"
      ></div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.closed {
  margin-top: 100vh;
  height: 0px;
  width: 0px;
  transition: all 300ms ease-in-out;
}

.barclose {
  width: 1px;
  transition: all, 3900ms;
}
</style>
