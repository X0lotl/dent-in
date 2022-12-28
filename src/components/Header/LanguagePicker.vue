<script>
import Language from "./Language.vue";
export default {
  name: "LanguagePicker",
  components: {
    Language,
  },
  props: {
    data: Object,
    languages: Array,
  },
  data() {
    return {
      curentLanguage: this.data.title
    }
  },
  setup(props) {
    let data = props.data;
    let languages = props.languages;

    return { data, languages };
  },
  methods: {
    changeLanguage(data, newLanguage) {
      data = newLanguage
    }
  }
};
</script>
<template>
  <select
    class="bg-transparent m-6 text-blue-500 font-sans font-bold text-lg"
    v-model="curentLanguage" v-on:change="changeLanguage(data, curentLanguage)"
  >
    <option v-for="thisLanguage in languages" :value="thisLanguage.jsonFile">
      {{ thisLanguage.title}}
    </option>
  </select>
  
  <!-- <select class="bg-transparent m-6 text-white font-sans font-bold text-lg">
    <option value="UK">
      <Language title=""></Language>
    </option>
    <option value="RU">
      <Language title=""></Language>
    </option>
  </select> -->
</template>
