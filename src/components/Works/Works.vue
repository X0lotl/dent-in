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
  data() {
    return {
      previusWorks: "",
      worksCategory: "",
      extraData: "",
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

    
    axios.
      get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
        params: {
          locale: this.$route.params.locale,
        }
      })
      .then((res) => { this.extraData = res.data.data[0] })
      .catch((err) => {
        console.log(err);
      })
  },
};
</script>
<template>
  <section
    v-if="previusWorks"
    id="works"
    class="container grid place-items-center"
  >
    <div class="grid px-2 md:w-3/4 grid-cols-1 py-10 gap-20">
      <div
        v-for="category in worksCategory"
        :key="category.id"
      >
        <h2
          v-if="category.attributes.title"
          class="w-full text-3xl font-base text-center"
        >
          {{ category.attributes.title }}
        </h2>
        <swiper
          class="w-full mt-5"
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          navigation
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="work in category.attributes.works.data"
            :key="work.id"
            class=""
          >
            <Work
              :extra-data="extraData.attributes"
              :work-data="work.attributes"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
