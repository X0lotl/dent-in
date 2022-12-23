<script>
export default {
  name: "ImgWithText",
  props: {
    imgNeedToBeLeft: Boolean,
    title: String,
    subTitle: String,
    mainText: String,
    list: {
      type: Array,
    },
  },
  setup(props) {
    const imgNeedToBeLeft = props.imgNeedToBeLeft;
    const subTitle = props.subTitle;
    const title = props.title;
    const mainText = props.mainText;
    const list = [...props.list];

    return { imgNeedToBeLeft, title, subTitle, mainText, list };
  },
};
</script>

<template>
  <div class="container grid lg:grid-cols-2 md:grid-cols-1 pt-20 pb-20" id="cards">
    <slot v-if="imgNeedToBeLeft === true"></slot>
    <div class="ml-8 mr-8">
      <p class="text-2xl font-normal">
        {{ title }}
      </p>
      <div class="text-stone-700 mt-5">
        <p class="mb-2">{{ subTitle }}</p>
        {{ mainText }}
        <div class="text-stone-700 mt-5">
          <p v-for="(item, index) in list">
            <i class="fa-solid fa-check text-emerald-500"></i> {{ item }}
          </p>
        </div>
      </div>
    </div>
    <slot v-if="imgNeedToBeLeft === false"></slot>
  </div>
</template>
o
<style scoped></style>
