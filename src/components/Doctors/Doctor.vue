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
    class="p-8 m-4 pb-10 hover:bg-neutral-200 hover:cursor-pointer hover:border-emerald-500 border-b-4 transition duration-200 border rounded-xl bg-neutral-100 border-neutral-400"
    @click="openModal()"
  >
    <div class="h-60 w-full overflow-hidden">
      <img
        class="h-full w-full object-cover object-top"
        :src="doctorData.Avatar.data.attributes.url"
        :alt="doctorData.Name"
      />
    </div>
    <h3 class=" text-xl text-neutral-600 font-bold pt-5">
      {{ doctorData.Name }}
    </h3>
    <p class="text-sm pt-4 text-neutral-600 whitespace-pre-wrap">
      {{ doctorData.Positions }}
    </p>
  </div>
  <DoctorModal
    v-show="isModalVivible"
    :doctor-data="doctorData"
    :img-src="doctorData.Avatar.data.attributes.url"
    @close="closeModal()"
    @click="closeModal()"
  />
</template>
<style scoped>
</style>
