<script>
import axios from 'axios';
export default {
  name: "ImgWithText",
  props: {
    imageWithTextData: Object,
  },
  setup(props) {
    const imageWithTextData = props.imageWithTextData;
    let imgSrc = imageWithTextData.Img.data.attributes.formats.small.url;

    return { imageWithTextData, imgSrc };
  },
  data() {
    return {
      imgSrc: ""
    }
  }
};
</script>

<template>
  <div
    :class="{ 'bg-neutral-200': imageWithTextData.isImgLeft }"
    class="pt-5 mt-10"
  >
    <div
      class="container grid lg:grid-cols-2 md:grid-cols-1 pt-5 pb-5"
      id="cards"
    >
      <img
        v-if="imageWithTextData.isImgLeft === true"
        class="w-[160rem] p-4 rounded-3xl"
        :src="this.imgSrc"
      />
      <div class="ml-8 mr-8 p-4">
        <p class="text-2xl font-normal">
          {{ imageWithTextData.Title }}
        </p>
        <div class="text-stone-700 mt-5 whitespace-pre-wrap">
          <p class="mb-2">{{ imageWithTextData.SubTitle }}</p>
          {{ imageWithTextData.Text }}
          <div class="text-stone-700 mt-5">
            <p v-for="(item, index) in imageWithTextData.List">
              <i class="fa-solid fa-check text-emerald-500"></i> {{ item }}
            </p>
          </div>
        </div>
      </div>
      <img
        v-if="imageWithTextData.isImgLeft === false"
        class="w-[160rem] p-4 rounded-3xl"
        :src="this.imgSrc"
      />
    </div>
  </div>
</template>
o
<style scoped></style>
