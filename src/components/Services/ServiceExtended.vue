<script>
export default {
  name: "ServiceExtended",
  data() {
    return {
      hovered: false,
      opened: true,
    };
  },
};
</script>
<template>
  <div class="container">
    <div
      @click="this.opened = !this.opened"
      class="mx-2 border border-emerald-500 border-b-4 rounded-lg my-5"
    >
      <div
        class="text-neutral-600 rounded-t-lg text-center text-2xl font-bold p-5 bg-neutral-200 flex justify-between"
      >
        <div></div>
        <p>Service Title</p>
        <p class="text-base m-1">
          <i v-if="!this.opened" class="fa-solid fa-maximize"></i>
          <i v-if="this.opened" class="fa-solid fa-minimize"></i>
        </p>
      </div>
      <div
        :class="{ opened: this.opened }"
        class="border-t border-t-emerald-500 overflow-hidden max-h-[1px]"
      >
        <div class="px-10 py-5">
          Some extra info <br />
          Some extra info <br />
          Some extra info <br />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.opened {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}
</style>
