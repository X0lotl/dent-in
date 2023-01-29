<script>
export default {
  name: "LanguagePicker",
  data() {
    return { selected: "" };
  },
  methods: {
    changeLanguage(e) {
      this.$router.push({
        // path: `/${e.target.value}`,
        name: this.$route.name,
        params: {
          locale: e.target.value
        }
      });
    },
  },
  mounted() {
    this.selected = "uk"
  }, 
  updated() {
    this.selected = this.$route.params.locale
  }
};
</script>
<template>
  
  <select
    v-model="selected"
    class="bg-transparent m-6 text-blue-500 font-sans font-bold text-lg appearance-none"
    v-on:change="changeLanguage($event)"
  >
    <option value="uk">🇺🇦 Українська</option>
    <option value="en">🇬🇧 English</option>
  </select>
</template>
