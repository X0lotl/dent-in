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
  <h3 class="h-16 text-black text-2xl text-center font-bold">
    {{ workData.Title }}
  </h3>
  <div
    v-if="!workData.Img.data[1]"
    :style="{ backgroundImage: `url(${workData.Img.data[0].attributes.url})` }"
    class="bg-no-repeat bg-cover bg-center h-80 grid place-items-end rounded-xl overflow-hidden"
  >
  </div>
  <div v-else>
    <div class="sm:flex w-full sm:h-80 justify-center rounded-xl overflow-hidden">
      <div
        :style="{ backgroundImage: `url(${workData.Img.data[0].attributes.url})` }"
        class="w-full bg-no-repeat bg-cover bg-center sm:h-80 h-[10rem] grid place-items-end"
      >
        <div class="h-3/4 mt-auto w-full">
          <h3 class="text-white sm:mt-44 text-xl sm:text-left text-right px-4 font-bold">
            {{ extraData.before }}
          </h3>
        </div>
      </div>
      <div
        :style="{ backgroundImage: `url(${workData.Img.data[1].attributes.url})` }"
        class="w-full bg-no-repeat bg-cover bg-center sm:h-80 h-[10rem] grid place-items-end"
      >
        <div class="h-3/4 mt-auto w-full">
          <h3 class="text-white sm:mt-44 text-xl text-right pr-4 font-bold">
            {{ extraData.after }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
