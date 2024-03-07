<template>
  <div class="pb-10 ">
    <div
         class="bg-[url(https://preview.redd.it/8rrqh5rpwj131.jpg?width=640&crop=smart&auto=webp&s=50b2f52ecb71901da7b38f685f304c43bb996d43)] h-[90vh] curved-div bg-blend-overlay bg-black bg-opacity-50 bg-cover">

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

          <span class="text-white pl-3 font-semibold">Get Started</span>
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
