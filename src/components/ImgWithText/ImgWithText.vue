<script>
export default {
  name: "ImgWithText",
  props: {
    imageWithTextData: Object,
  },
  setup(props) {
    const imageWithTextData = props.imageWithTextData;

    return { imageWithTextData };
  },
};
</script>

<template>
  <div
    class="container grid lg:grid-cols-2 md:grid-cols-1 pt-20 pb-20"
    id="cards"
  >
    <img
      v-if="imageWithTextData.imgNeedToBeLeft === true"
      class="w-[160rem] p-4"
      :src="imageWithTextData.imgSrc"
    />
    <div class="ml-8 mr-8 p-4">
      <p class="text-2xl font-normal">
        {{ imageWithTextData.title }}
      </p>
      <div class="text-stone-700 mt-5">
        <p class="mb-2">{{ imageWithTextData.subTitle }}</p>
        {{ imageWithTextData.mainText }}
        <div class="text-stone-700 mt-5">
          <p v-for="(item, index) in imageWithTextData.list">
            <i class="fa-solid fa-check text-emerald-500" ></i> {{ item }}
          </p>
        </div>
      </div>
    </div>
    <img
      v-if="imageWithTextData.imgNeedToBeLeft === false"
      class="w-[160rem] p-4"
      :src="imageWithTextData.imgSrc"
    />
  </div>
</template>
o
<style scoped></style>
