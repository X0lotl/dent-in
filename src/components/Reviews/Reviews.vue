<script>
import SectionTitle from "../SectionTitle.vue";
import Review from "./Review.vue";

export default {
  name: "Reviews",
  components: {
    SectionTitle,
    Review,
  },
  data() {
    return {
      reviews: [
        {
          reviewerName: "Ольга",
          reviewText:
            "Очень понравилось лечение и подход Возной Светланы Витальевны, Полянской Юлии Юрьевны.Потрясающие профи своего дела! А так же их ассистенты!",
          imgSrc: "src/assets/avatar1.png",
        },
        {
          reviewerName: "Ирина",
          reviewText:
            "Высококлассные, опытные специалисты, уделяют внимание малейшим нюансам и тщательно изучают вашу историю болезни, если пациент приходит впервые.",
          imgSrc: "src/assets/avatar2.png",
        },
        {
          reviewerName: "Мария",
          reviewText:
            "Врачи легко находят общий язык даже с крохотными детками - теперь  ребенок не плачет за 3 дня до похода в клинику, а с радостью бежит!   ",
          imgSrc: "src/assets/avatar3.png",
        },
        {
          reviewerName: "Анастасия",
          reviewText:
            "Искренне заботятся о здоровье своих пациентов и всегда на связи в случае необходимости проконсультировать по телефону!  ",
          imgSrc: "src/assets/avatar4.jpg",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="bg-slate-100">
    <div class="container pt-1 pb-10">
      <SectionTitle title="ОТЗЫВЫ"></SectionTitle>
      <div class="pt-10 grid lg:grid-cols-2 md:grid-cols-1">
        <Review
          v-for="thisReview in this.reviews"
          :reviewerName="thisReview.reviewerName"
          :reviewText="thisReview.reviewText"
          ><img
            class="w-32 h-32 rounded-[50%] mr-10"
            :src="thisReview.imgSrc"
        /></Review>
      </div>
    </div>
  </div>
</template>
