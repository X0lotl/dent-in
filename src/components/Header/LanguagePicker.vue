<script>
export default {
  name: "LanguagePicker",
  data() {
    return { selected: "uk" };
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
  watch: {
    '$route.params.locale': {
      handler: function(newLocale) {
        this.selected = newLocale
      },
      immediate: true
    }
  },
};
</script>
<template>
  
  <select
    :value="selected"
    class="bg-transparent m-6 text-blue-500 font-sans font-bold lg:text-lg text-base appearance-none"
    @change="changeLanguage($event)"
  >
    <option value="uk">🇺🇦 Українська</option>
    <option value="en">🇬🇧 English</option>
  </select>
</template>
