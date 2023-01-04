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
    <div  class="text-black fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center">
      <div
        class="overflow-auto shadow-2xl flex flex-col bg-white p-10 rounded-3xl w-[500px] h-[500px]"
        
      >
        <div  class="flex justify-between border-b-2 pb-4 border-b-emerald-500">
          <h1 class="text-2xl ">Записатись на прийом</h1>
            <button @click="close()" class="rounded-full h-10 w-10 border-4 border-red-300 hover:border-red-600 hover:rotate-180 transition duration-200"><i class="fa-solid fa-xmark"></i></button>
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
