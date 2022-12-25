<script>
import jsonData from "./assets/ua.json";
import Header from "./components/Header/Header.vue";
import BigMessage from "./components/BigMessage/BigMessage.vue";
import FourIcons from "./components/FourIcons/FourIcons.vue";
import ImgWithText from "./components/ImgWithText/ImgWithText.vue";
import NumbersOnBackground from "./components/NumbersOnBackground/NumbersOnBackground.vue";
import Services from "./components/Services/Services.vue";
import Reviews from "./components/Reviews/Reviews.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    BigMessage,
    FourIcons,
    ImgWithText,
    NumbersOnBackground,
    Services,
    Reviews,
    Footer,
  },
  data() {
    return {
      data: jsonData,
    };
  },
};
</script>

<template>
  <Header :headerData="this.data.headerData"></Header>
  <BigMessage :bigMessageData="this.data.bigMessageData"></BigMessage>
  <FourIcons :fourIconsData="this.data.fourIconsData"></FourIcons>
  <div class="bg-neutral-200 pt-5 mt-10">
    <ImgWithText :imageWithTextData="this.data.imagesWithText[0]">
    </ImgWithText>
  </div>
  <div>
    <ImgWithText :imageWithTextData="this.data.imagesWithText[1]">
    </ImgWithText>
  </div>
  <NumbersOnBackground :numbersOnBackgroundData="this.data.numbersOnBackgroundData"></NumbersOnBackground>
  <Services :servicesData="this.data.servicesData"></Services>
  <Reviews :reviewsData="this.data.reviewsData"></Reviews>
  <Footer></Footer>
</template>

<style scoped></style>
