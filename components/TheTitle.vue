<template>
    <div class="">
        <h3 class="font-DM text-5xl">
            {{ title }}
        </h3>

        <p class="py-5 font-Zilla text-lg">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    image: String
})

</script>

<style lang="scss"
       scoped></style>