<script>
import Language from "./Language.vue";
export default {
  name: "LanguagePicker",
  components: {
    Language,
  },
};
</script>
<template>
  <select class="bg-transparent m-6 text-white font-sans font-bold text-lg">
    <option value="UK">
      <Language title="🇺🇦&emsp;Українська"></Language>
    </option>
    <option value="RU">
      <Language title="🇷🇺&emsp;Російська"></Language>
    </option>
  </select>
</template>
