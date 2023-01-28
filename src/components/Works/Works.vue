<script>
import Work from "./Work.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "Works",
  components: {
    Swiper,
    SwiperSlide,
    Work
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<template>
  <div class="container">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><Work></Work></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>
