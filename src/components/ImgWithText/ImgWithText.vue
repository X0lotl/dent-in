<script>
export default {
  name: "ImgWithText",
  props: {
    imageWithTextData: Object,
  }
};
</script>

<template>
  <div
    :class="{ 'bg-neutral-200': imageWithTextData.isImgLeft }"
    class="pt-5 mt-10"
  >
    <div
      id="cards"
      class="container grid lg:grid-cols-2 md:grid-cols-1 pt-5 pb-5"
    >
      <img
        v-if="imageWithTextData.isImgLeft === true"
        class="h-[23rem] p-4 rounded-3xl"
        :src="imageWithTextData.Img.data.attributes.url"
      />
      <div class="ml-8 mr-8 p-4">
        <p class="text-2xl font-normal">
          {{ imageWithTextData.Title }}
        </p>
        <div class="text-stone-700 mt-5 whitespace-pre-wrap">
          <p class="mb-2">
            {{ imageWithTextData.SubTitle }}
          </p>
          {{ imageWithTextData.Text }}
          <div class="text-stone-700 mt-5">
            <p
              v-for="(item, index) in imageWithTextData.List"
              :key="index"
            >
              <i class="fa-solid fa-check text-emerald-500"></i> {{ item }}
            </p>
          </div>
        </div>
      </div>
      <img
        v-if="imageWithTextData.isImgLeft === false"
        class="h-[23rem] p-4 rounded-3xl"
        :src="imageWithTextData.Img.data.attributes.url"
      />
    </div>
  </div>
</template>
<style scoped></style>
