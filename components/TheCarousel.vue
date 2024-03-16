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
            <CarouselItem class="basis-1/2 flex  justify-center items-center">
                <Icon name="flag:un-1x1"
                      class="text-8xl" />
            </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious />
        <CarouselNext /> -->
    </Carousel>
</template>