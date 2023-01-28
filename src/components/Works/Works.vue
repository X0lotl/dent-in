<script>
import Work from "./Work.vue";

export default {
  name: "Works",
  components: {
    Work
  },
  data() {
    return {
      previusWorks: [
        {
          title: "Будь-яка назва роботи",
          imgUrl: "https://res.cloudinary.com/dprrzla0s/image/upload/v1674489301/pexels_cedric_fauntleroy_4269362_1820238ed2.jpg?updated_at=2023-01-23T15:55:02.580Z"
        },
        {
          title: "Будь-яка назва роботи",
          imgUrl: "https://res.cloudinary.com/dprrzla0s/image/upload/v1674489301/pexels_cedric_fauntleroy_4269362_1820238ed2.jpg?updated_at=2023-01-23T15:55:02.580Z"
        },
        {
          title: "Будь-яка назва роботи",
          imgUrl: "https://res.cloudinary.com/dprrzla0s/image/upload/v1674489301/pexels_cedric_fauntleroy_4269362_1820238ed2.jpg?updated_at=2023-01-23T15:55:02.580Z"
        },
        {
          title: "Будь-яка назва роботи",
          imgUrl: "https://res.cloudinary.com/dprrzla0s/image/upload/v1674489301/pexels_cedric_fauntleroy_4269362_1820238ed2.jpg?updated_at=2023-01-23T15:55:02.580Z"
        },
      ]
    }
  }
};
</script>
<template>
  <div class="container">
    <div class="p-10 grid grid-cols-1 lg:grid-cols-2">
      <Work v-for="workData in this.previusWorks" :workData="workData"></Work>
    </div>
    
  </div>
</template>
