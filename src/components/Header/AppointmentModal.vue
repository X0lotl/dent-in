<script>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import MazInput from "maz-ui/components/MazInput";
import axios from "axios";
import { useToast } from "vue-toastification";
// read documentation https://louismazel.github.io/maz-ui-3/components/maz-phone-number-input

export default {
  name: "AppoinrmentModal",
  components: {
    MazPhoneNumberInput,
    MazInput,
  },
  emits: ["closeModal"],
  setup() {
    const toast = useToast();

    return { toast }
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
};
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="modalData"
      :class="{
        'cursor-wait': wait,
      }"
      class="text-black fixed top-0 bottom-0 left-0 right-0 flex bg-black bg-opacity-60 justify-center items-center transition-colors duration-200"
    >
      <div
        class="overflow-auto shadow-2xl flex flex-col bg-white p-10 rounded-3xl m-2"
        @click.stop
      >
        <div class="flex justify-between border-b-2 pb-4 border-b-emerald-500">
          <h2 class="text-2xl">
            {{ modalData.Title }}
          </h2>
          <button
            class="rounded-full !h-10 !w-10 border-4 border-red-500 hover:border-red-600 hover:rotate-180 transition duration-200"
            @click.stop="closeModal()"
          >
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
        <div>
          <div
            v-if="modalData"
            class="pt-5"
          >
            <MazInput
              :success="appointmentData.name !== ''"
              v-model="appointmentData.name"
              :error="appointmentData.name === ''"
              color="primary"
              :label="modalData.NameLabel"
              @update:model-value="checkName"
            />
          </div>
          <div class="pt-5">
            <MazPhoneNumberInput
              color="primary"
              :success="phoneInputResults?.isValid"
              v-model="appointmentData.phone"
              :error="
                !phoneInputResults?.isValid && appointmentData.phone === ''
              "
              default-country-code="UA"
              :preferred-countries="['UA', 'US', 'PL']"
              :translations="{
                countrySelector: {
                  placeholder: modalData.CountrySelector,
                  error: modalData.CountryError,
                },
                phoneInput: {
                  placeholder: modalData.PhoneLabel,
                  example: modalData.Example,
                },
              }"
              @update="phoneInputResults = $event"
            />
          </div>
          <div class="pt-5">
            <MazInput
              :error="
                !emailInputResults.isValid &&
                  appointmentData.email !== ''
              "
              v-model="appointmentData.email"
              :success="emailInputResults.isValid"
              color="primary"
              label="Email"
              @update:model-value="checkEmail"
            />
          </div>
          <div class="pt-5">
            <MazInput
              v-model="appointmentData.comment"
              color="primary"
              :label="modalData.Comment"
            />
          </div>
        </div>

        <div class="flex pt-5 justify-center">
          <button
            :class="{ 'cursor-wait': wait }"
            class="text-white bg-emerald-600 p-4 rounded-xl hover:bg-emerald-700 transition duration-300"
            @click.stop="sendMessage()"
          >
            {{ modalData.ButtonTitle }}
          </button>
        </div>
        <span
          v-if="fieldsError"
          class="text-red-500 text-center p-2 mt-4"
        >
          {{ modalData.fieldsError }}
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
