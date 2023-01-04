<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import MazInput from "maz-ui/components/MazInput";
// read documentation https://louismazel.github.io/maz-ui-3/components/maz-phone-number-input
export default {
  name: "AppoinrmentModal",
  components: {
    MazPhoneNumberInput,
    MazInput,
  },
  data() {
    return {
      appointmentData: {
        name: "",
        phone: "",
        email: "",
        comment: "",
      },
      phoneInputResults: {},
      emailInputResults: {
        isValid: false,
      },
      regEx:
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div
      class="text-black fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center"
    >
      <div
        class="overflow-auto shadow-2xl flex flex-col bg-white p-10 rounded-3xl"
      >
        <div class="flex justify-between border-b-2 pb-4 border-b-emerald-500">
          <h1 class="text-2xl">Записатись на прийом</h1>
          <button
            @click="close()"
            class="rounded-full h-10 w-10 border-4 border-red-400 hover:border-red-600 hover:rotate-180 transition duration-200"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="pt-5">
          <MazInput color="primary" label="ПІБ" v-model="appointmentData.name">
          </MazInput>
        </div>
        <div class="pt-5">
          {{ this.appointmentData.phone }}
          <MazPhoneNumberInput
            color="primary"
            @update="phoneInputResults = $event"
            :success="phoneInputResults?.isValid"
            :error="
              !phoneInputResults?.isValid && this.appointmentData.phone === ''
            "
            default-country-code="UA"
            :preferred-countries="['UA', 'US', 'PL']"
            v-model="this.appointmentData.phone"
            :translations="{
              countrySelector: {
                placeholder: 'Код країни',
                error: 'Choose country',
              },
              phoneInput: {
                placeholder: 'Номер телефону',
                example: 'Приклад:',
              },
            }"
          ></MazPhoneNumberInput>
        </div>
        <div class="pt-5">
          <MazInput
            :success="this.regEx.test(appointmentData.email)"
            :error="
              !this.regEx.test(appointmentData.email) &&
              this.appointmentData.email !== ''
            "
            color="primary"
            label="Email"
            v-model="appointmentData.email"
          >
          </MazInput>
        </div>
        <div class="pt-5">
          <MazInput
            color="primary"
            label="Коментар"
            v-model="appointmentData.comment"
          >
          </MazInput>
        </div>
        <div class="flex pt-5 justify-center">
          <button
            class="text-white bg-emerald-600 p-4 rounded-xl hover:bg-emerald-700 transition duration-300"
          >
            Записатись
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
