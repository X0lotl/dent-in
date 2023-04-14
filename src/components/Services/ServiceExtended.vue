<script>
import Price from "./Price.vue";
import AppointmentButton from "../Header/AppointmentButton.vue";
import { Icon } from "@iconify/vue"
export default {
  name: "ServiceExtended",
  components: {
    Price,
    AppointmentButton,
    Icon,
  },
  props: {
    serviceData: Object,
    extraData: Object
  },
  setup(props) {
    let serviceData = props.serviceData.attributes;

    return { serviceData };
  },
  data() {
    return {
      hovered: false,
      opened: false,
    };
  },
};
</script>
<template>
  <div class="container w-3/4">
    <div
      class="mx-2 border border-emerald-500 rounded-lg my-5 transition-all duration-300"
      @click="opened = !opened"
    >
      <div
        class="text-neutral-600 rounded-t-lg text-center text-2xl font-bold p-5 bg-neutral-200 flex justify-between hover:cursor-pointer"
      >
        <div></div>
        <h2>{{ serviceData.Title }}</h2>
        <p class="text-xl m-1">
          <Icon
            v-if="!opened"
            icon="tabler:arrows-maximize"
          />
          <Icon
            v-if="opened"
            icon="tabler:arrows-minimize"
          />
        </p>
      </div>
      <div
        :class="{ opened: opened }"
        class="border-t border-y-emerald-500 border-b-4 rounded-b max-h-0 transition-all duration-500 ease-in-out overflow-hidden px-2 lg:px-20"
        @click.stop
      >
        <div class="sm:p-10 p-2">
          <div class="grid grid-cols-1 xl:grid-cols-2">
            <div>
              <h3 class="md:text-3xl sm:text-2xl text-xl mb-5 font-bold">
                {{ serviceData.SubTitle }}
              </h3>
              <p class="md:text-xl text-sm mr-10 letter">
                {{ serviceData.Text }}
              </p>
            </div>
            <img
              class="w-full rounded-xl mt-5"
              :alt="serviceData.Title"
              loading="lazy"
              :src="serviceData.Photo.data.attributes.url"
            />
          </div>
          <div class="h-10"></div>
          <div class="border rounded-3xl bg-neutral-200 sm:mx-10 mt-5 overflow-hidden">
            <div
              class="flex pt-6 pb-3 bg-neutral-300 justify-between lg:px-20 px-2 border-b-2 border-b-emerald-500 border font-bold md:text-2xl sm:text-xl text-base"
            >
              <h4 class="max-w-2xl">
                {{ extraData.serviceTitle }}
              </h4>
              <p class="mt-auto">
                {{ extraData.priceTitle }}
              </p>
            </div>
            <Price
              v-for="price in serviceData.prices.data.sort((a,b) => (a.id - b.id))"
              :key="price.id"
              :title="price.attributes.Title"
              :price="price.attributes.Price"
              :currency="price.attributes.CurrencyName"
            />
          </div>
          <div class="flex justify-center pt-4">
            <AppointmentButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.opened {
  max-height: 1700px;
}
</style>
