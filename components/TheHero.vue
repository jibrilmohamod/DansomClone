<template>
  <div class="pb-10 ">
    <div
         class="bg-[url(https://img.freepik.com/free-photo/front-view-woman-sitting-near-fruits_23-2149522151.jpg?t=st=1709803835~exp=1709807435~hmac=f8f43e36770a2e12d22ae3566150bf17671f544d41e60f03c8952bbf5ed0b5a8&w=740)] h-[90vh] curved-div bg-blend-overlay bg-black bg-opacity-50 bg-cover">

      <TheNav />

      <!-- call to action  -->
      <div class="h-[76vh] px-6 flex items-center justify-center flex-col gap-6 pt-5">

        <!-- Big Header Text -->
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-7xl font-Playfair text-center font-bold pb-6 text-white">
            One word: <span class=" text-white block">
              Patner
            </span>
          </h1>
          <p class="text-xl text-white text-center font-OpenSans">
            Powerful transformations across the horn of Africa
          </p>
        </div>

        <!-- cta button  -->
        <Button class="w-1/2 mx-auto font-Montserrat text-lg h-12 bg-secondary">

          <Icon name="ri:lightbulb-flash-fill"
                class="text-white text-xl" />

          <span class="text-white pl-3 font-semibold">
            What We Do
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
