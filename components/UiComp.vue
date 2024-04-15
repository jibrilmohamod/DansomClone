<template>
    <div class="pt-8 pl-6 pr-3 md:px-2 pb-4 md:container md:m-auto md:pt-16 md:flex md:gap-x-6 2xl:px-0">
        <div class="md:basis-1/2 md:flex md:flex-col h-full">
            <!-- small text with line to its right -->


            <!-- section header -->
            <div class="py-4">
                <h4 class=" leading-tight 2xl:text-6xl font-DM text-5xl">
                    {{ header }}
                </h4>
            </div>

            <!-- section body -->
            <div class="">
                <!-- paragraph -->
                <p class="font-Zilla text-[18px] leading-relaxed tracking-wide text-black 2xl:w-3/4 2xl:pb-7">
                    {{ paragraph }}
                </p>

                <!-- button and image slots -->
                <div>
                    <!-- Button slot -->
                    <slot name="button"> </slot>

                    <!-- Image slot -->
                    <slot name="image"> </slot>
                </div>
            </div>
        </div>

        <!-- image slot -->
        <div class="hidden md:flex basis-1/2 m-auto">
            <slot name="image2"> </slot>
        </div>
    </div>
</template>

<script setup>
// define props with default values and types
defineProps({
    smallText: {
        type: String,
        default: "",
    },
    header: {
        type: String,
        default: "",
    },
    paragraph: {
        type: String,
        default: " .",
    },
})
</script>

<style scoped></style>
