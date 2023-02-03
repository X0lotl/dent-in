<script>
import axios from "axios";
import Work from "./Work.vue";

export default {
  name: "Works",
  components: {
    Work,
  },
  data() {
    return {
      previusWorks: "",
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
  },
};
</script>
<template>
  <div v-if="this.previusWorks" class="container">
    <div class="p-10 grid grid-cols-1 lg:grid-cols-2">
      <Work
        v-for="workData in this.previusWorks"
        :workData="workData.attributes"
      ></Work>
    </div>
  </div>
</template>
