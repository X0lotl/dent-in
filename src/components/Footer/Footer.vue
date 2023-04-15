<script>
import { Icon } from "@iconify/vue"
export default {
  name: "Footer",
  components: {
    Icon,
  }
};
</script>
<template>
  <footer>
    <div class="bg-neutral-800 text-neutral-200">
      <div class="container flex justify-center">
        <a
          href="https://facebook.com/dentinkiev/" 
          name="facebook"
        >
          <div
            class="w-40 py-5 hover:bg-[#3b5998] transition duration-500 text-center text-6xl text"
          >
            <Icon
              icon="bx:bxl-facebook"
              class="text-center w-full"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/dentinkiev/"
          name="instagram"
        >
          <div
            class="w-40 py-5 hover:bg-[#C13584] transition duration-500 text-center text-6xl text"
          >
            <Icon
              icon="mdi:instagram"
              class="text-center w-full"
            />
          </div>
        </a>
      </div>
    </div>
    <div class="bg-neutral-800 text-neutral-400 p-5">
      <div class="container text-center flex justify-between">
        <p>Copyright © Dentin</p>
        <a href="https://t.me/X0lotle">Made by X0lotl</a>
      </div>
    </div>
  </footer>
</template>
