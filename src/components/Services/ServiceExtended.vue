<script>
import Price from "./Price.vue";
import AppointmentButton from "../Header/AppointmentButton.vue";

export default {
  name: "ServiceExtended",
  components: {
    Price,
    AppointmentButton
  },
  data() {
    return {
      hovered: false,
      opened: false,
    };
  },
  props: {
    serviceData: Object,
  },
  setup(props) {
    let serviceData = props.serviceData.attributes;

    return { serviceData };
  },
};
</script>
<template>
  <div class="container w-3/4">
    <div
      @click="this.opened = !this.opened"
      class="mx-2 border border-emerald-500 border-b-4 rounded-lg my-5"
    >
      <div
        class="text-neutral-600 rounded-t-lg text-center text-2xl font-bold p-5 bg-neutral-200 flex justify-between"
      >
        <div></div>
        <p>{{ this.serviceData.Title }}</p>
        <p class="text-base m-1">
          <i v-if="!this.opened" class="fa-solid fa-maximize"></i>
          <i v-if="this.opened" class="fa-solid fa-minimize"></i>
        </p>
      </div>
      <div
        @click.stop
        :class="{ opened: this.opened }"
        class="border-t border-t-emerald-500 overflow-hidden max-h-[1px] px-2 lg:px-20"
      >
        <div class="sm:p-10 p-2">
          <div class="grid grid-cols-1 xl:grid-cols-2">
            <div>
              <h2 class="md:text-3xl sm:text-2xl text-xl mb-5 font-bold">
                {{ this.serviceData.SubTitle }}
              </h2>
              <p class="md:text-xl text-sm mr-10 letter">
                {{ this.serviceData.Text }}
              </p>
            </div>
            <img
              class="w-full rounded-xl mt-5"
              :src="this.serviceData.Photo.data.attributes.url"
            />
          </div>
          <div class="h-10"></div>
          <div class="border rounded-3xl bg-neutral-200">
            <Price
              v-for="price in this.serviceData.prices.data"
              :title="price.attributes.Title"
              :price="price.attributes.Price"
              :currency="price.attributes.CurrencyName"
            ></Price>
          </div>
          <div class="flex justify-center pt-4">
            <AppointmentButton></AppointmentButton>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.opened {
  max-height: 100000px;
  transition: max-height 3s ease-in-out;
}
</style>
