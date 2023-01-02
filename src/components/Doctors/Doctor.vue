<script>
import axios from "axios";
export default {
  name: "Doctor",
  props: {
    doctorData: Object,
  },
  setup(props) {
    let doctorData = props.doctorData;
    let imgSrc = `${import.meta.env.VITE_STRAPI_URL}${
      doctorData.Avatar.data.attributes.url
    }`;
    return { doctorData, imgSrc };
  },
};
</script>
<template>
  <div class="p-8 m-4 pb-10 hover:bg-neutral-200 hover:border-b-emerald-500 border-b-4 transition duration-200 border rounded-xl bg-neutral-100 border-neutral-400">
    <div
      class="h-96 bg-center rounded-lg bg-cover"
      :style="{ backgroundImage: `url(${imgSrc})` }"
    ></div>
    <h1 class="text-center text-2xl text-neutral-600 font-bold pt-5">{{doctorData.Name}}</h1>
    <p class="text-xl pt-4 text-neutral-600">
        {{ doctorData.Positions}}
    </p>
  </div>
</template>
