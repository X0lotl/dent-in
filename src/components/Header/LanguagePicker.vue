<script>
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
export default {
  name: "LanguagePicker",
  setup() {
    const route = useRoute()
    const host = "https://dent-in.com.ua"
    useHead({
      title: "Стоматологічний центр «Дент- ін»",
      meta: [
        {
          name: "description",
          content: "Вищий пілотаж у стоматології. Ми працюємо для тих, хто обирає найкраще!"
        },
        {
          name: "og:description",
          content: "Вищий пілотаж у стоматології. Ми працюємо для тих, хто обирає найкращe!"
        },
        {
          name: "og:locale",
          content: route.params.locale
        },
        {
          name: "og:image",
          content: "https://res.cloudinary.com/dprrzla0s/image/upload/v1675470792/logo1_31c28b0c41.webp?updated_at=2023-02-04T00:33:13.405Z"
        },
        {
          name: "og:title",
          content: "Стоматологічний центр «Дент- ін»"
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:url",
          content: host + route.fullPath
        }

      ],
      "link": [
        {
          rel: "canonical",
          href: host + "/" + route.params.locale + "/"
        },
        {
          rel: "alternate",
          href: host + route.fullPath
        }
      ]
    })
  },
  data() {
    return { selected: "uk" };
  },
  watch: {
    '$route.params.locale': {
      handler: function(newLocale) {
        this.selected = newLocale
      },
      immediate: true
    }
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
  }
};
</script>
<template>
  <select
    :value="selected"
    class="bg-transparent m-6 text-blue-500 font-sans font-bold lg:text-lg text-base appearance-none"
    @change="changeLanguage($event)"
  >
    <option value="uk">
      🇺🇦 Українська
    </option>
    <option value="en">
      🇬🇧 English
    </option>
  </select>
</template>
