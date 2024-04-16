<template>
  <div class="">
    <TheCarousel class="" />
    <div class="curved-div b bg-cover bg-center absolute inset-0 bg-black bg-opacity-50">

      <TheNav />

      <!-- call to action  -->
      <div class="h-full px-6 flex items-center justify-center flex-col gap-6 ">

        <!-- Big Header Text -->
        <div class="flex flex-col items-center justify-center px-2">
          <h1 class="text-[4.2rem] font-DM text-center pb-6 text-white leading-[70px] tr">
            One word: <span class=" text-white block">
              Patner
            </span>
          </h1>
          <p class="text-xl text-white text-center font-Zilla">
            Dansom Consultancy offers tailored services for development in the horn of Africa. From monitoring and
            evaluation to policy guidance.
          </p>
        </div>

        <!-- cta button  -->
        <Button class=" mx-auto font-Montserrat  py-6 bg-primary flex gap-1 px-7">

          <Icon name="ri:lightbulb-flash-fill"
                class="text-white text-xl" />

          <span class="text-white text-lg font-Montserrat ">
            What we do
          </span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup
        lang="ts">
        import { Button } from '@/components/ui/button'
</script>

<style scoped>
.curved-div {
  border-bottom-left-radius: 50% 30px;
  border-bottom-right-radius: 50% 30px;
}
</style>
