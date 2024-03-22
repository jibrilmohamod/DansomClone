<template>
    <div>
        <NuxtImg :src="image"
                 class="rounded-xl h-60 w-full shadow-quaternary shadow-xl" />
    </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        default: "https://dansomconsultancy.org/wp-content/uploads/2018/10/expertise-1000x757.jpg"
    }
})
</script>

<style lang="scss"
       scoped></style>