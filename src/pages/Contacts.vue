<script>
import axios from "axios";
import Header from "../components/Header/Header.vue";
import SectionTitle from "../components/SectionTitle.vue";
import Footer from "../components/Footer/Footer.vue";
export default {
  name: "Contacts",
  components: {
    Header,
    SectionTitle,
    Footer,
  },
  data() {
    return {
      extraData: "",
      contactsData: "",
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
      v-if="extraData"
      :title="extraData.contactsTitle"
    />
    <div class="container pt-20 grid md:grid-cols-2 sm:grid-cols-1">
      <section>
        <iframe
          :src="contactsData.mapUrl"
          class="h-96 w-[100%] rounded-lg p-4"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
      <section>
        <div class="m-8 text-xl">
          <p class="p-2">
            <i
              class="fa-solid fa-location-dot text-emerald-500 text-2xl pr-2"
            />
            {{ contactsData.adress }}
          </p>
          <p class="p-2">
            <i
              class="fa-solid fa-phone-volume text-emerald-500 text-2xl pr-2"
            />
            {{ contactsData.phone }}
          </p>
          <p class="p-2">
            <i class="fa-solid fa-envelope text-emerald-500 text-2xl pr-2" />
            {{ contactsData.email }}
          </p>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>
