<template>
    <div class="h-64 md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out">
        <NuxtImg loading="lazy"
                 :src="image"
                 class="h-[40vh] m-auto object-cover shadow-xl shadow-black" />
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