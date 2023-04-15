<script>
import { Icon } from "@iconify/vue"

export default {
  name: "ImgWithText",
  components: {
    Icon,
  },
  props: {
    imageWithTextData: Object,
  }
};
</script>

<template>
  <div
    :class="{ 'bg-neutral-200': imageWithTextData.isImgLeft }"
    class="pt-5 mt-10 "
  >
    <div
      id="cards"
      class="container grid lg:grid-cols-2 md:grid-cols-1 pt-5 pb-5"
    >
      <div
        v-if="imageWithTextData.isImgLeft === true"
        class="h-[23rem]"
      >
        <img
          class="h-full p-4 rounded-3xl !object-cover"
          width="625"
          height="368"
          loading="lazy"
          :alt="imageWithTextData.Title"
          :src="imageWithTextData.Img.data.attributes.url"
        />
      </div>
      <div class="ml-8 mr-8 p-4">
        <p class="text-2xl font-normal">
          {{ imageWithTextData.Title }}
        </p>
        <div class="text-stone-700 mt-5 whitespace-pre-wrap">
          <p class="mb-2">
            {{ imageWithTextData.SubTitle }}
          </p>
          {{ imageWithTextData.Text }}
          <div class="text-stone-700 mt-5 grid grid-cols-1 gap-1">
            <p
              v-for="(item, index) in imageWithTextData.List"
              :key="index"
              class="flex justify-start gap-2"
            >
              <Icon
                icon="ic:twotone-check"
                class="text-emerald-500 text-xl mt-[2px]"
              />
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div 
        v-if="imageWithTextData.isImgLeft === false"
        class="h-[23rem]"
      >
        <img
          class="h-full p-4 rounded-3xl !object-cover"
          :alt="imageWithTextData.Title"
          :src="imageWithTextData.Img.data.attributes.url"
          width="625"
          height="368"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
