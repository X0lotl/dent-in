<script>
export default {
  name: "Work",
  props: {
    workData: Object,
    extraData: Object,
  },
};
</script>
<template>
  <div
    v-if="!workData.Img.data[1]"
    :style="{ backgroundImage: `url(${workData.Img.data[0].attributes.url})` }"
    class="bg-no-repeat bg-cover bg-center h-80 grid place-items-end rounded-xl overflow-hidden"
  >
    <div class="h-3/4 mt-auto w-full bg-gradient-to-t from-black to-transparent">
      <h3 class="text-white mt-44 text-2xl text-center font-bold">
        {{ workData.Title }}
      </h3>
    </div>
  </div>
  <div v-else>
    <div class="flex w-full h-80 justify-center rounded-xl overflow-hidden">
      <div
        :style="{ backgroundImage: `url(${workData.Img.data[0].attributes.url})` }"
        class="w-full bg-no-repeat bg-cover bg-center h-80 grid place-items-end"
      >
        <div class="h-3/4 mt-auto w-full bg-gradient-to-t from-black to-transparent">
          <h3 class="text-white mt-28 xs:mt-36 sm:mt-44 text-xl text-left pl-4 font-bold">
            {{ extraData.before }}
          </h3>
        </div>
      </div>
      <div class="h-3/4 absolute mt-12 grid place-items-end">
        <h3 class="text-white text-2xl text-center font-bold">
          {{ workData.Title }}
        </h3>
      </div>
      <div
        :style="{ backgroundImage: `url(${workData.Img.data[1].attributes.url})` }"
        class="w-full bg-no-repeat bg-cover bg-center h-80 grid place-items-end"
      >
        <div class="h-3/4 mt-auto w-full bg-gradient-to-t from-black to-transparent">
          <h3 class="text-white mt-28 xs:mt-36 sm:mt-40 md:mt-40 lg:mt-44 text-xl text-right pr-4 font-bold">
            {{ extraData.after }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
