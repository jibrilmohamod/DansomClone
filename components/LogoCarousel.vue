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
    <Carousel class=""
              :opts="{
                loop: true,
            }"
              :plugins="[Autoplay({
                delay: 2000,
                stopOnInteraction: true,
            })]">
        <CarouselContent>
            <CarouselItem class="basis-1/2 flex  justify-center items-center">
                <Icon name="flag:un-1x1"
                      class="text-8xl" />
            </CarouselItem>
            <CarouselItem class="basis-1/2 flex  justify-center items-center">
                <Icon name="flag:un-1x1"
                      class="text-8xl" />
            </CarouselItem>
            <CarouselItem class="basis-2/3 flex  justify-center items-center">
                <NuxtImg src="/The_World_Bank_logo.svg"
                         alt="WFP"
                         class="h-20" />

            </CarouselItem>
            <CarouselItem class="basis-1/2 flex  justify-center items-center">
                <NuxtImg src="/wfp-logo-standard-blue-en.svg"
                         alt="WFP"
                         class="h-20" />
            </CarouselItem>
            <CarouselItem class="basis-1/2 flex  justify-center items-center">
                <NuxtImg src="/Coat_of_arms_of_Somalia.svg"
                         alt="WFP"
                         class="h-20" />

            </CarouselItem>
            <CarouselItem class="basis-1/2 flex justify-center items-center">
                <NuxtImg src="/FAO_logo.svg"
                         alt="WFP"
                         class="h-20" />

            </CarouselItem>
            <CarouselItem class="basis-1/2 flex justify-center items-center">
                <NuxtImg src="/GIZ.svg"
                         alt="WFP"
                         class="h-30" />

            </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious />
        <CarouselNext /> -->
    </Carousel>
</template>