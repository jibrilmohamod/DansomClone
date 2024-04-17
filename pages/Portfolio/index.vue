<template>
  <div>
    <TheHeader title="Our Portfolio">
      <template #image>
        <NuxtImg
          provider="cloudinary"
          loading="lazy"
          format="webp"
          alt="image"
          sizes="sm:100vw md:50vw lg:1500px"
          :modifiers="{ effect: 'colorize:60', color: 'black' }"
          src="v1713240810/close-up-farmer-holding-plants_23-2149142896_fuhkxy.jpg"
          class="w-full h-full object-cover object-center"
        />
      </template>
    </TheHeader>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
