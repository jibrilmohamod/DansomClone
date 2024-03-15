<template>
    <div class="flex gap-3 items-center py-4">
        <!-- Icon -->
        <div class="h-fit bg-primary w-fit rounded-full p-2">
            <Icon :name="icon"
                  class=" text-black text-7xl" />
        </div>

        <!-- Title & Subtitle -->
        <div class="w-full">
            <h5 class="font-Merriweather text-xl">
                {{ title }}
            </h5>
            <p class="font-Montserrat text-sm">
                {{ subtitle }}
            </p>
        </div>

    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,

    },
    title: String,
    subtitle: String
})

</script>

<style lang="scss"
       scoped></style>