<script setup
        lang="ts">
        import {
          NavigationMenu,
          NavigationMenuContent,
          NavigationMenuIndicator,
          NavigationMenuItem,
          NavigationMenuLink,
          NavigationMenuList,
          NavigationMenuTrigger,
          NavigationMenuViewport,
        } from '@/components/ui/navigation-menu'
</script>

<template>
  <div class="w-full outline outline-red-600 px-4 py-3">
    <NavigationMenu class="w-96">
      <NavigationMenuList>
        <!-- menu item -->
        <ul class="flex w-[90vw] items-center justify-between">
          <li class="basis-0 outline outline-1 outline-red-600">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <Icon name="ri:menu-2-line"
                      class="text-4xl text-white" />

              </NavigationMenuLink>
            </NavigationMenuItem>
          </li>

          <li class="basis-11/12">
            <!-- logo -->
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <img src="/dansom-logo.png"
                     alt="logo"
                     class="w-96" />
              </NavigationMenuLink>
            </NavigationMenuItem>

          </li>
        </ul>


      </NavigationMenuList>

    </NavigationMenu>
  </div>



</template>