<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center">
      <div
        class="overflow-auto shadow-2xl flex flex-col bg-slate-700 w-[500px] h-[500px]"
        
        @click.stop
      >
        <div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
