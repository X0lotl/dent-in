<script>
import axios from "axios";
import SectionTitle from "../components/SectionTitle.vue";
import { Icon } from "@iconify/vue"

export default {
  name: "Contacts",
  components: {
    SectionTitle,
    Icon,
  },
  data() {
    return {
      extraData: {
        contactsTitle: "Контакти"
      },
      contactsData: {
        adress: "Адреса: Київ, вул. Михаила Бойчука, 11 , Україна",
        phone: "Тел: +380-50-440-83-92",
        email: "E-mail: oksadenta@gmail.com"
      },
    };
  },
  mounted() {
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
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/contacts`, {
        params: {
          locale: this.$route.params.locale,
        },
      })
      .then((res) => (this.contactsData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div style="min-height: calc(100vh - 19rem)">
    <SectionTitle
      :key="extraData"
      :title="extraData.contactsTitle"
    />
    <div class="container pt-20 grid md:grid-cols-2 sm:grid-cols-1">
      <section>
        <iframe
          :src="contactsData.mapUrl"
          class="h-96 w-[100%] rounded-lg p-4"
          width="343"
          height="352"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section>
        <div class="m-8 grid grid-cols-1 gap-4 text-xl">
          <p class="p-2 flex justify-start gap-4">
            <Icon
              icon="material-symbols:location-on-rounded"
              class="text-emerald-500 text-3xl"
            />
            {{ contactsData.adress }}
          </p>
          <p class="p-2 flex justify-start gap-4">
            <Icon
              icon="material-symbols:call"
              class="text-emerald-500 text-3xl"
            />
            {{ contactsData.phone }}
          </p>
          <p class="p-2 flex justify-start gap-4">
            <Icon
              icon="ic:outline-mail"
              class="text-emerald-500 text-3xl"
            />
            {{ contactsData.email }}
          </p>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>
