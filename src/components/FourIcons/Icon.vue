<script>
export default {
  name: "Icon",
  props: {
    iconData: Object
  },
  setup(props) {
    const iconData = props.iconData;
    const iconUrl = `${iconData.icon.data.attributes.url}`
    return { iconData, iconUrl };
  }
};
</script>
<template>
  <div class=" p-2 text-center">
    <div class="flex justify-center">
      <div
        class="rounded-[50%] h-40 w-40 flex justify-center align-middle p-8 hover:bg-blue-400 transition duration-700"
      >
      <img :src=iconUrl>
      </div>
    </div>
    <p class="text-2xl mt-7">{{ iconData.Title }}</p>
    <p class="mt-5 text-stone-700">{{ iconData.SubTitle }}</p>
  </div>
</template>