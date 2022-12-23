<script>
export default {
    name: "Language",
    props: {
        title: String,
    },
    setup(props) {
        const title = props.title;
        return {title}
    }
}
</script>
<template>
    {{ title }}
</template>