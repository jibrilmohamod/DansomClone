<template>
 <TheNav />
 <div class="bg-white">
  <TheCarousel class="z-40" />
 </div>
</template>

<script setup lang="ts">
 import { Button } from "@/components/ui/button"
</script>

<style scoped>
 .curved-div {
  border-bottom-left-radius: 50% 30px;
  border-bottom-right-radius: 50% 30px;
 }
</style>
