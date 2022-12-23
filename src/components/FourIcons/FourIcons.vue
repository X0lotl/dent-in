<script>
import SectionTitle from "../SectionTitle.vue";
import Icon from "./Icon.vue"
export default {
  name: "FourIcons",
  components: {
    SectionTitle,
    Icon,
  },
};
</script>
<template>
  <div class="container text-center">
    <SectionTitle title="ЗАБОТИМСЯ О ЗДОРОВЬЕ ВАШИХ ЗУБОВ"></SectionTitle>
    <div class="grid grid-cols-4">
      <Icon title="НАДЕЖНОСТЬ" text="Гарантии выполненной работы на долгие годы"><img src="../../assets/shild.svg"></Icon>
      <Icon title="ПЕРСОНАЛИЗАЦИЯ" text="Радушный прием и безграничное внимание доктора"><img src="../../assets/heart.svg"></Icon>
      <Icon title="ИННОВАЦИОННОСТЬ" text="Новейшие техники лечения сложных заболеваний"><img src="../../assets/innovation.svg"></Icon>
      <Icon title="ОПЫТ и ЗНАНИЯ" text="Наши врачи имеют многолетнюю успешную практику"><img src="../../assets/hat.svg"></Icon>
    </div>
  </div>
</template>
