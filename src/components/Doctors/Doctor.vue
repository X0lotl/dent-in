<script>
import DoctorModal from "./DoctorModal.vue";
export default {
  name: "Doctor",
  components: {
    DoctorModal,
  },
  props: {
    doctorData: Object,
  },
  data() {
    return {
      isModalVivible: false,
    };
  },
  setup(props) {
    let doctorData = props.doctorData;
    let imgSrc = doctorData.Avatar.data.attributes.url;
    return { doctorData, imgSrc };
  },
  methods: {
    openModal() {
      this.isModalVivible = true;
    },
    closeModal() {
      this.isModalVivible = false;
    },
  },
};
</script>
<template>
  <div
    class="p-8 m-4 pb-10 hover:bg-neutral-200 hover:border-emerald-500 border-b-4 transition duration-200 border rounded-xl bg-neutral-100 border-neutral-400"
    @click="openModal()"
  >
    <div
      class="h-60 bg-center rounded-lg bg-cover avatar"
      :style="{ backgroundImage: `url(${imgSrc})` }"
    ></div>
    <h3 class="text-center text-xl text-neutral-600 font-bold pt-5">
      {{ doctorData.Name }}
    </h3>
    <p class="text-sm pt-4 text-neutral-600 whitespace-pre-wrap">
      {{ doctorData.Positions }}
    </p>
  </div>
  <DoctorModal
    :doctorData="doctorData"
    :imgSrc="imgSrc"
    v-show="this.isModalVivible"
    @close="closeModal()"
  ></DoctorModal>
</template>
<style scoped>
.avatar {
  background-position: 50% 12%;
}
</style>
