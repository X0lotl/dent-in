<script>
export default {
  name: "DoctorModal",
  methods: {
    close() {
      this.$emit("close");
    },
    replaceWithBr(someInput) {
      return;
    },
  },
  props: {
    imgSrc: String,
    doctorData: Object,
  },
  setup(props) {
    const doctorData = props.doctorData;
    const imgSrc = props.imgSrc;

    return {
      doctorData,
      imgSrc,
    };
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div
      class="text-black fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center"
    >
      <div
      @click.stop
        class="overflow-auto shadow-2xl flex flex-col m-2 bg-white p-10 rounded-3xl border-[3px] border-emerald-500 w-[50rem] max-h-[90%]"
      >
        <div class="grid md:grid-cols-2 grid-cols-2">
          <div
            class="sm:h-96 h-52 m-5 sm:m-3 bg-center rounded-lg bg-cover avatar"
            :style="{ backgroundImage: `url(${imgSrc})` }"
          ></div>
          <div>
            <div class="flex justify-end pb-4">
              <button
                @click="close()"
                class="rounded-full h-10 w-10 border-4 border-red-500 hover:border-red-600 hover:rotate-180 transition duration-200"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <h3 class="md:text-3xl sm:text-2xl  text-base font-bold mr-5 border-b-2 border-b-emerald-500 p-4 pt-0">
              {{ doctorData.Name }}
            </h3>
            <p class="md:text-xl sm:text-sm pt-4 ml-4 whitespace-pre-wrap text-neutral-600">
              {{ doctorData.Positions }}
            </p>
            <p
              v-if="doctorData.Quote"
              class="hidden sm:flex whitespace-pre-wrap ml-6 md:text-xl sm text-sm pt-4 text-neutral-600 text-center"
            >
              <i class="fa-solid fa-quote-left text-emerald-500"></i>
              {{ doctorData.Quote }}
              <i class="fa-solid fa-quote-right text-emerald-500"></i>
            </p>
          </div>
        </div>
        <p
              v-if="doctorData.Quote"
              class="sm:hidden flex justify-between whitespace-pre-wrap md:text-xl text-sm pt-4 text-neutral-600 text-center"
            >
              <i class="fa-solid fa-quote-left text-emerald-500"></i>
              {{ doctorData.Quote }}
              <i class="fa-solid fa-quote-right text-emerald-500"></i>
            </p>
        <p class=" sm:text-base text-sm whitespace-pre-wrap text-neutral-600 p-5 leading-7">
          {{ doctorData.MainText }}
        </p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.avatar {
  background-position: 50% 10%;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
