<template>
    <div class="h-64 md:h-96 2xl:h-[40vh] md:w-10/12 duration-1000 ease-in-out">
        <img loading="lazy"
                 :src="image"
                 width="1586"
                 height="992"
                 :alt="photography.programmeAnalysis.alt"
                 class="h-[40vh] m-auto object-cover shadow-xl shadow-black" />
    </div>
</template>

<script setup>
import { photography } from "~/data/photography"
defineProps({
    image: {
        type: String,
        default: photography.programmeAnalysis.src
    }
})
</script>

<style lang="scss"
       scoped></style>
