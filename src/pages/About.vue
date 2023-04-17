<script>
import axios from "axios";
import SectionTitle from "../components/SectionTitle.vue";
import ImgWithText from "../components/ImgWithText/ImgWithText.vue";
import Works from "../components/Works/Works.vue";

export default {
  name: "About",
  components: {
    SectionTitle,
    ImgWithText,
    Works,
  },
  data() {
    return {
      aboutData: {
        isImgLeft: false,
        Title: "Ми піклуємось про ваші зуби",
        Img: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dprrzla0s/image/upload/v1680297055/thumbnail_about_0412f87a4c.webp"
            }
          }
        },
        Text: "Ми надаємо комплексні високоякісні стоматологічні послуги сучасним діловим людям, професіоналам і тим, хто цінує  свій час, а також їх сім’ям, керуючись високими стандартами якості, сучасними інноваційними техніками лікування і використанням новітнього обладнання. Щодня команда досвідчених лікарів об’єднує  зусилля в спільній турботі про здорові і щасливі посмішки наших клієнтів ",
        List: [
          "Технологічність",
          "Клієнтоорієнтування",
          "Комплексні послуги"
        ]
      },
      extraData: "",
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/about-page-contents`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.aboutData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/extra-data-p`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then((res) => (this.extraData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="content">
    <section>
      <SectionTitle
        :key="extraData"
        :title="extraData.aboutTitle || 'Про нас'"
      />
      <ImgWithText
        :key="aboutData"
        :image-with-text-data="aboutData"
      />
    </section>
    <SectionTitle
      :key="extraData"
      :title="extraData.worksTitle || 'Наші роботи'"
    />
    <Works />
  </div>
</template>
<style scoped>
.content {
  min-height: calc(100vh - 19rem);
}
</style>
