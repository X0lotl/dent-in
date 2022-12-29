<script>
export default {
  name: "LanguagePicker",
  data() {
    return { selected: "" };
  },
  props: {
    locale: String,
  },
  setup(props) {
    let locale = props.locale;
    return { locale };
  },
  methods: {
    changeLanguage(e) {
      this.$router.push({
        path: `/${this.locale}`,
      });
      // this.$router.go(0);
    },
  },
};
</script>
<template>
  <select
    v-model="locale"
    class="bg-transparent m-6 text-black font-sans font-bold text-lg"
    v-on:change="changeLanguage($event)"
  >
    <option value="uk">Українська</option>
    <option value="en">Англійська</option>
  </select>
</template>
