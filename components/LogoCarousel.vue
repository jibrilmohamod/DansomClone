<script setup
        lang="ts">
        import {
            Carousel,
            CarouselContent,
            CarouselItem,
            CarouselNext,
            CarouselPrevious,
        } from '@/components/ui/carousel'
        import Autoplay from 'embla-carousel-autoplay'


</script>

<template>
    <Carousel class="mx-auto w-full max-w-5xl"
              :opts="{
                loop: true,
            }"
              :plugins="[Autoplay({
                delay: 1800,
                stopOnInteraction: true,
            })]">
        <CarouselContent>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <Icon name="flag:un-1x1"
                      class="text-6xl opacity-80" />
            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/Capture1.PNG-removebg-preview.png"
                         alt="WFP"
                         class="h-14 object-contain opacity-85" />
            </CarouselItem>
            <CarouselItem class="basis-1/2 md:basis-1/4 flex justify-center items-center py-1">
                <NuxtImg src="/The_World_Bank_logo.svg"
                         alt="WFP"
                         class="h-12 object-contain opacity-85" />

            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/wfp-logo-standard-blue-en.svg"
                         alt="WFP"
                         class="h-12 object-contain opacity-85" />
            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/Coat_of_arms_of_Somalia.svg"
                         alt="WFP"
                         class="h-12 object-contain opacity-85" />

            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/FAO_logo.svg"
                         alt="WFP"
                         class="h-12 object-contain opacity-85" />

            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/GIZ.svg"
                         alt="WFP"
                         class="h-14 object-contain opacity-85" />

            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/download (1).png"
                         alt="WFP"
                         class="h-12 object-contain opacity-85" />

            </CarouselItem>
            <CarouselItem class="basis-1/3 md:basis-1/5 flex justify-center items-center py-1">
                <NuxtImg src="/International_Finance_Corporation_logo.svg"
                         alt="WFP"
                         class="h-10 object-contain opacity-85" />

            </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious />
        <CarouselNext /> -->
    </Carousel>
</template>
