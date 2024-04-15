<template>
    <div class="px-6 pt-6 md:container">
        <div class="flex">
            <div class="basis-1/2">
                <slot name="One"></slot>
            </div>


            <!-- image slot  -->
            <slot name="Image"></slot>
        </div>


    </div>
</template>

<script setup
        lang="ts">


</script>

<style lang="scss"
       scoped></style>