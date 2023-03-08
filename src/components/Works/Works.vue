<script>
import axios from "axios";
import Work from "./Work.vue";

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: "Works",
  components: {
    Work,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      previusWorks: "",
      worksCategory: ""
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/works`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.previusWorks = res.data.data))
      .catch((err) => {
        console.log(err);
      });

    axios.
      get(`${import.meta.env.VITE_STRAPI_URL}/api/work-categories`, {
        params: {
          locale: this.$route.params.locale,
          populate: "works.Img",
        }
      })
      .then((res) => { this.worksCategory = res.data.data })
      .catch((err) => {
        console.log(err);
      })
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<template>
  <section id="works" v-if="this.previusWorks" class="container">
    <div class="grid px-2 lg:grid-cols-2 grid-cols-1 py-10 gap-20">
      <div class="" v-for="category in this.worksCategory">
        <h2 class="w-full text-3xl font-base text-center">{{ category.attributes.title }}</h2>
        <swiper class="w-full mt-5" :modules="modules" :slides-per-view="1" :space-between="30" navigation
          :pagination="{ clickable: true }"  @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide class="" v-for="work in category.attributes.works.data">
            <Work :workData="work.attributes"></Work>
          </swiper-slide>
        </swiper>
        
      </div>

    </div>
  </section>
</template>
