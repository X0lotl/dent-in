<script>
export default {
  name: "Footer",
};
</script>
<template>
  <footer>
    <div class="bg-neutral-800 text-neutral-200">
      <div class="container flex justify-center">
        <a href="https://facebook.com/dentinkiev/">
          <div
            class="w-40 hover:bg-[#3b5998] transition duration-500 text-center text-6xl text"
          >
            <i
              class="fa-brands fa-facebook-f flex justify-center align-middle m-5"
            ></i>
          </div>
        </a>
        <a href="https://www.instagram.com/dentinkiev/">
          <div
            class="w-40 hover:bg-[#C13584] transition duration-500 text-center text-6xl text"
          >
            <i
              class="fa-brands fa-instagram flex justify-center align-middle m-5"
            ></i>
          </div>
        </a>
      </div>
    </div>
    <div class="bg-neutral-800 text-neutral-400 p-5">
      <div class="container text-center flex justify-between">
        <p>Copyright © Dentin</p>
        <p>Made by X0lotl</p>
      </div>
    </div>
  </footer>
</template>
