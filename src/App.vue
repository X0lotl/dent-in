<script>
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
    Footer
  },
};
</script>

<template>
  <Header></Header>
  <BigMessage></BigMessage>
  <FourIcons></FourIcons>
  <div class="bg-neutral-200 pt-5 mt-10">
    <ImgWithText
      :imgNeedToBeLeft="true"
      title="ЗАБОТА О ДОЛГОЛЕТИИ ВАШИХ ЗУБОВ В ДНК НАШЕЙ КЛИНИКИ"
      subTitle="Наши врачи - опытные практикующие профессионалы."
      mainText="
          Мы используем современные методики лечения, лучшие зарубежные
          материалы, применяем индивидуальный подход в работе с каждым
          пациентом, гарантируем длительный результат. Комплексный
          профилактический план для любого возраста."
      :list="[
        'Европейские протоколы лечения:',
        'Высокопрофессиональные врачи',
        'Современное оборудование',
      ]"
    >
      <img class="w-[160rem" src="./assets/baby.png" />
    </ImgWithText>
  </div>
  <div>
    <ImgWithText
      :imgNeedToBeLeft="false"
      title="ОПЫТ И ПРОФЕССИОНАЛИЗМ "
      mainText="За плечами многолетней истории клиники стоит опытный персонал, передовые технологии, инновационная техническая база и талантливое руководство. Здесь царит атмосфера доброжелательности, доверия и внимания. Профессиональная деятельность стоматологии “Дент-ин” аккредитована и лицензируется Министерством здравоохранения Украины."
      :list="[
        '20 лет на рынке',
        'Высококачественные материалы  ',
        'Инновационные технологии ',
      ]"
    >
      <img class="w-[160rem] rounded-md" src="./assets/team2.png" />
    </ImgWithText>
  </div>
  <NumbersOnBackground></NumbersOnBackground>
  <Services></Services>
  <Reviews></Reviews>
  <Footer></Footer>
</template>

<style scoped></style>
