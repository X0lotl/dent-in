<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import MazInput from "maz-ui/components/MazInput";
import axios from "axios";
import { useToast } from "vue-toastification";
// read documentation https://louismazel.github.io/maz-ui-3/components/maz-phone-number-input

export default {
  name: "AppoinrmentModal",
  emits: ["closeModal"],
  components: {
    MazPhoneNumberInput,
    MazInput,
  },
  data() {
    return {
      wait: false,
      fieldsError: false,
      modalData: {},
      appointmentData: {
        name: "",
        phone: "",
        email: "",
        comment: "",
      },
      nameInputResult: {
        isValid: false,
      },
      phoneInputResults: {},
      emailInputResults: {
        isValid: false,
      },
      regEx:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  setup() {
    const toast = useToast();

    return { toast }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
      this.appointmentData = {
        name: "",
        phone: "",
        email: "",
        comment: "",
      };
    },
    checkEmail() {
      if (this.regEx.test(this.appointmentData.email)) {
        this.emailInputResults.isValid = true;
      } else {
        this.emailInputResults.isValid = false;
      }
    },
    checkName() {
      if (this.appointmentData.name !== "") {
        this.nameInputResult.isValid = true;
      } else {
        this.emailInputResults.isValid = false;
      }
    },
    async sendMessage() {
      this.fieldsError = false;
      if (
        this.emailInputResults.isValid &&
        this.phoneInputResults.isValid &&
        this.nameInputResult.isValid
      ) {
        try {
          this.wait = true;
          let res = await axios({
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            url: import.meta.env.VITE_API_URL,
            data: this.appointmentData,
          });

          this.closeModal();
          this.wait = false;

          if (res.data.status === "delivered") {
            this.toast.success(this.modalData.smsSucces);
          } else {
            this.toast.error(this.modalData.smsError);
          }
        } catch (err) {
          this.closeModal();
          this.wait = false;
          this.toast.error(this.modalData.smsError);
          console.error(err);
        }
      } else {
        this.fieldsError = true;
      }
    },
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_STRAPI_URL}/api/appoinrment-modals`, {
        params: {
          locale: this.$route.params.locale,
          populate: "deep",
        },
      })
      .then((res) => (this.modalData = res.data.data[0].attributes))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div :class="{
      'cursor-wait': this.wait,
    }"
      class="text-black fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center transition-colors duration-200">
      <div @click.stop class="overflow-auto shadow-2xl flex flex-col bg-white p-10 rounded-3xl">
        <div class="flex justify-between border-b-2 pb-4 border-b-emerald-500">
          <h2 class="text-2xl">{{ this.modalData.Title }}</h2>
          <button @click.stop="closeModal()"
            class="rounded-full h-10 w-10 border-4 border-red-500 hover:border-red-600 hover:rotate-180 transition duration-200">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <div v-if="this.modalData" class="pt-5">
            <MazInput @update:model-value="checkName" :success="this.appointmentData.name !== ''"
              :error="this.appointmentData.name === ''" color="primary" :label="this.modalData.NameLabel"
              v-model="appointmentData.name">
            </MazInput>
          </div>
          <div class="pt-5">
            <MazPhoneNumberInput color="primary" @update="phoneInputResults = $event"
              :success="phoneInputResults?.isValid" :error="
                !phoneInputResults?.isValid && this.appointmentData.phone === ''
              " default-country-code="UA" :preferred-countries="['UA', 'US', 'PL']"
              v-model="this.appointmentData.phone" :translations="{
                countrySelector: {
                  placeholder: this.modalData.CountrySelector,
                  error: this.modalData.CountryError,
                },
                phoneInput: {
                  placeholder: this.modalData.PhoneLabel,
                  example: this.modalData.Example,
                },
              }"></MazPhoneNumberInput>
          </div>
          <div class="pt-5">
            <MazInput @update:model-value="checkEmail" :error="
              !this.emailInputResults.isValid &&
              this.appointmentData.email !== ''
            " :success="this.emailInputResults.isValid" color="primary" label="Email"
              v-model="appointmentData.email">
            </MazInput>
          </div>
          <div class="pt-5">
            <MazInput color="primary" :label="this.modalData.Comment" v-model="appointmentData.comment">
            </MazInput>
          </div>
        </div>

        <div class="flex pt-5 justify-center">
          <button @click.stop="sendMessage()" :class="{ 'cursor-wait': this.wait }"
            class="text-white bg-emerald-600 p-4 rounded-xl hover:bg-emerald-700 transition duration-300">
            {{ this.modalData.ButtonTitle }}
          </button>
        </div>
        <span v-if="this.fieldsError" class="text-red-500 text-center p-2 mt-4">
          {{ this.modalData.fieldsError }}
        </span>
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
